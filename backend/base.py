from flask import Flask
import cexprtk
import json
import datetime

from flask_cors import CORS
api = Flask(__name__)
cors = CORS(api)

user_file = open("data/user.json", "r")
user = json.load(user_file)
user_file.close()

rows = open("data/rows.json", "r")

def get_list_definition(list_id):
    with open(f"data/{list_id}.json") as read_file:
        return json.load(read_file)
    
def get_row_id_columns(row_id):
    return rows[row_id]["columns"]

def get_row_id_formula(row_id):
    return rows[row_id]["formula"]

def update_user():
    user_file = open("data/user.json", "w")
    json.dumps(user, user_file, indent=4)
    user_file.close()

@api.post('/test/<text>')
def my_profile(text):
    response_body = {
        "name": "YOU",
        "your-text": f"You sent: '{text}'. :)"
    }
    print(text)

    return response_body

# Initial Footprint ###################################################

@api.post('/initial/insert/<row_type>')
def push_row_initial(row_type):
    columns = get_row_id_columns(row_type)
    user["initial"].push({ id: row_type, columns: columns})

@api.post('/initial/remove/<int:index>')
def remove_row_initial(index):
    user["initial"].pop(index)

@api.post('/initial/update/<int:index>/<key>/<value>')
def update_row_initial(index, key, value):
    user["initial"][index]["columns"][key]["value"] = value

@api.get('/initial/rows')
def get_rows_initial():
    return user["initial"]

# Tracker ###################################################

@api.post('/tracker/insert/<date>/<int:index>/<row_type>')
def push_row(date, index, row_type):
    user["tracker"][date].push({ id: row_type, columns: columns})

@api.post('/tracker/remove/<date>/<int:index>')
def remove_row(index):
    user["tracker"][date].pop(index)

@api.post('/tracker/update/<date>/<int:index>/<key>/<value>')
def update_row(date, index, key, value):
    user["tracker"][date][index]["columns"][key]["value"] = value

@api.get('/tracker/rows/<date>')
def get_rows(date):
    return user["tracker"][date]

# List Contents ############################################

# This is just for /lists/carbon-sources
@api.get('/lists/<list_id>')
def get_list_defs(list_id):
    return lists.get_list_definition(list_id)

# Goals ####################################################

@api.get('/user/goals/year')
def get_goal_yearly():
    return user["goals"]["year"]

@api.post('/user/goals/year/<value>')
def set_goal_yearly(value):
    user["goals"]["year"] = value
    
@api.get('/user/goals/month')
def get_goal_month():
    return user["goals"]["month"]

@api.post('/user/goals/month/<value>')
def set_goal_month(value):
    user["goals"]["month"] = value

@api.get('/user/goals/day')
def get_goal_day():
    return user["goals"]["day"]

@api.post('/user/goals/day/<value>')
def set_goal_day(value):
    user["goals"]["day"] = value

# Calculate Current

def in_current_time(string):
    str_date = datetime.datetime.strptime(string, "%Y/%m/%d")
    current_date = datetime.now()
    year = str_date.year == current_date.year
    month = str_date.month == current_date.month,
    day = str_date.day == current_date.day
    return {"year": year,
            "month": month and year,
            "day": day and month and year}

def do_calculation(timeframe):
    result = 0
    for date, rows in user["tracker"]:
        if in_current_time(date)[timeframe]:
            for row in rows:
                row_id = row["id"]
                variables = {key: val["value"] for key, val in row["columns"]}
                result += cexprtk.evaluate_expression(
                    get_row_id_formula(row_id),
                    variables
                )

    return result

@api.get('/user/current/year')
def get_current_yearly():
    return do_calculation("year")
    
@api.get('/user/current/month')
def get_current_month():
    return do_calculation("month")

@api.get('/user/current/day')
def get_current_day():
    return do_calculation("day")

# Calculations ##################################

