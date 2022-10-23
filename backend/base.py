from flask import Flask

api = Flask(__name__)

@api.route('/test')
def my_profile():
    response_body = {
        "name": "You",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body

# Lists ###################################################

@api.post('/user/insert/<list_id>/<int:index>/<row_type>')
def insert_row(list_id, index, row_type):
    response = {

    }
    return response

@api.post('/user/remove/<list_id>/<int:index>')
def remove_row(index):
    response = {
        
    }
    return response

@api.post('/user/update/<list_id>/<int:index>/<key>/<value>')
def update_row():
    response = {
        
    }
    return response

@api.get('/user/rows/<list_id>')
def get_rows():
    response = {
        
    }
    return response

# List Contents ############################################

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