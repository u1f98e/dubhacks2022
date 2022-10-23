import json

rows = open("data/rows.json", "r")

def get_list_definition(list_id):
    with open(f"data/{list_id}.json") as read_file:
        return json.load(read_file)
    
def get_new_row_columns(row_id):
    return rows[row_id]["columns"]