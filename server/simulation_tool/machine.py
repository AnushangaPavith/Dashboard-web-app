"""
Simulation script for a machine runtime 

"""

from unittest.result import failfast
import requests
import json
import time 

# generate random integer values
from random import seed
from random import randint

URL= 'http://localhost:3001/api'

# Initialize operation post request
x = requests.delete(URL + '/machines/D003')
print(x.json())

x = requests.delete(URL + '/molds/m003')
print(x.json())

# Get request to get mold data 
x = requests.get(URL + '/machines')
print(x.json())

# Initialize data 
data = {
    "machineID"         : "D003",
    "moldID"            : "m003",
    "moldShots"         : 0,
    "failedShots"       : 0,
    "prodRate"          : 0,
    "prod_start_date"   : "2022-04-12",
    "prod_end_date"     : "2022-06-20",
    "monaNumber"        : "mon222",
    "material"          : "metal",
    "moldMaker"         : "china"
}


# Initialize operation post request
x = requests.post(URL + '/init',data=data)
print(x.json())

# # Check initialized data

x = requests.get(URL + '/machines')
print(x.json())

x = requests.get(URL + '/molds')
print(x.json())


# Hourly updates
i=0

# seed random number generator
seed(1)

while(i<100):

    data = {
        "machineID"         : "D003",
        "failedShots"       : randint(0,1),
    }

    i+=1

    # 1 second delay
    time.sleep(1)

    x = requests.post(URL + '/machines/' + data["machineID"], data=data)
    print(x.json())

    # Check initialized data
    x = requests.get(URL + '/machines')
    print(x.json())

    x = requests.get(URL + '/molds')
    print(x.json())
