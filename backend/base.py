from flask import Flask
import cexprtk
import json
import datetime

from flask_cors import CORS
api = Flask(__name__)
cors = CORS(api)

rows = json.load(open("data/rows.json", "r"))

def get_user():
    user_file = open("data/user.json", "r")
    user = json.load(user_file)
    user_file.close()
    return user

def update_user(user):
    user_file = open("data/user.json", "w")
    json.dump(user, user_file, indent=4)
    user_file.close()


def get_list_definition(list_id):
    with open(f"data/{list_id}.json") as read_file:
        return { "rows": json.load(read_file) }
    
def get_row_id_columns(row_id):
    return rows[row_id]["columns"]

def get_row_id_label(row_id):
    return rows[row_id]["label"]

def get_row_id_formula(row_id):
    return rows[row_id]["formula"]

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
    get_user()["initial"].push({ "id": row_type, "columns": columns})
    return ""

@api.post('/initial/remove/<int:index>')
def remove_row_initial(index):
    user = get_user()
    user["initial"].pop(index)
    update_user(user)
    return ""

@api.post('/initial/update/<int:index>/<key>/<value>')
def update_row_initial(index, key, value):
    user = get_user()
    user["initial"][index]["columns"][key]["value"] = value
    update_user(user)
    return ""

@api.get('/initial/rows')
def get_rows_initial():
    return { "rows": get_user(["initial"]) }

# Tracker ###################################################

@api.post('/tracker/insert/<date>/<row_type>')
def push_row(date, row_type):
    columns = get_row_id_columns(row_type)
    label   = get_row_id_label(row_type)
    user = get_user()
    user["tracker"][date].append({ "id": row_type, "label": label, "columns": columns})
    update_user(user)
    return ""

@api.post('/tracker/remove/<date>/<int:index>')
def remove_row(date, index):
    user = get_user()
    user["tracker"][date].pop(index)
    update_user(user)
    return ""

@api.post('/tracker/update/<date>/<int:index>/<key>/<value>')
def update_row(date, index, key, value):
    user = get_user()
    user["tracker"][date][index]["columns"][key]["value"] = value
    update_user(user)
    return ""

@api.get('/tracker/rows/<date>')
def get_rows(date):
    return { "rows": get_user()["tracker"][date] }

# List Contents ############################################

# This is just for /lists/carbon-sources
@api.get('/lists/carbon-sources/rows/1')
def get_list_defs():
    return get_list_definition("carbon-sources")

# Goals ####################################################

@api.get('/user/goals/year')
def get_goal_yearly():
    return get_user["goals"]["year"]

@api.post('/user/goals/year/<value>')
def set_goal_yearly(value):
    user = get_user()
    user["goals"]["year"] = value
    update_user(user)
    return ""
    
@api.get('/user/goals/month')
def get_goal_month():
    return get_user["goals"]["month"]

@api.post('/user/goals/month/<value>')
def set_goal_month(value):
    user = get_user()
    get_user["goals"]["month"] = value
    update_user(user)

@api.get('/user/goals/day')
def get_goal_day():
    return get_user["goals"]["day"]

@api.post('/user/goals/day/<value>')
def set_goal_day(value):
    user = get_user()
    user["goals"]["day"] = value
    update_user(user)
    return ""

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
    for date, rows in get_user["tracker"]:
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

