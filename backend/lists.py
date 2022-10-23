import json

def get_list_definition(list_id):
    with open("data/{list_id}.json") as read_file:
        return json.load(read_file)
    
