import requests
import json

URL_MOLDS = 'http://localhost:3001/api/molds'
URL_MACHINES = 'http://localhost:3001/api/machines'

# Get request to get mold data 
x = requests.get(URL_MOLDS)
r = x.json()
#print(r)

# Get request to get machine data 
x = requests.get(URL_MACHINES + '/D02')
r = x.json()
print(r)

a = 3
if(r[0]['failedShots']==3):
    a = 9

print(a)

# data to be sent to api
data = {'machineID': 'D02',
        'failedShots' : a
        }

json_dump = json.dumps(data)
print(json_dump)

# POST request to update machine data 
x = requests.post(url = URL_MACHINES + '/' + data['machineID'] ,data=data)
#r = x.json()
print("===========Reply============")
print(x.text)
print(x.json())


