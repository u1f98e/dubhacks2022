from flask import Flask
import lists

api = Flask(__name__)

@api.route('/test')
def my_profile():
    response_body = {
        "name": "You",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body

# Initial Footprint ###################################################

@api.post('/initial/insert/<date>/<int:index>/<row_type>')
def insert_row_initial(date, index, row_type):
    response = {
        
    }
    return response

@api.post('/initial/remove/<date>/<int:index>')
def remove_row_initial(date, index):
    response = {
        
    }
    return response

@api.post('/initial/update/<date>/<int:index>/<key>/<value>')
def update_row_initial(date, index, key, value):
    response = {
        
    }
    return response

@api.get('/initial/rows/<date>')
def get_rows_initial(date):
    response = {
        
    }
    return response

# Tracker ###################################################

@api.post('/tracker/insert/<date>/<int:index>/<row_type>')
def insert_row(date, index, row_type):
    response = {
        
    }
    return response

@api.post('/tracker/remove/<date>/<int:index>')
def remove_row(index):
    response = {
        
    }
    return response

@api.post('/tracker/update/<date>/<int:index>/<key>/<value>')
def update_row(date, index, key, value):
    response = {
        
    }
    return response

@api.get('/tracker/rows/<date>')
def get_rows(date):
    response = {
        
    }
    return response

# List Contents ############################################

@api.get('/lists/<list_id>')
def get_list_defs(list_id):
    return lists.get_list_definition(list_id)

# Goals ####################################################

@api.get('/user/goals/year')
def get_goal_yearly():
    response = {
        
    }
    return response

@api.post('/user/goals/year')
def set_goal_yearly():
    response = {
        
    }
    return response

@api.get('/user/goals/month')
def get_goal_monthly():
    response = {
        
    }
    return response

@api.get('/user/goals/day')
def get_goal_daily():
    response = {
        
    }
    return response

@api.get('/user/current/year')
def get_current_yearly():
    response = {
        
    }
    return response

@api.get('/user/current/month')
def get_current_monthly():
    response = {
        
    }
    return response

@api.get('/user/current/day')
def get_current_daily():
    response = {
        
    }
    return response