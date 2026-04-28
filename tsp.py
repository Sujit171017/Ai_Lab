#Travelling salesman problem
from itertools import permutations 

def tsp(graph, start): 
    n = len(graph) 
    nodes = [i for i in range(n) if i != start] 

    min_cost = float('inf') 
    best_path = [] 

    for p in permutations(nodes): 
        cost = 0 
        current = start 

        for city in p: 
            cost += graph[current][city] 
            current = city 

        cost += graph[current][start]  # back to start 

        if cost < min_cost: 
            min_cost = cost 
            best_path = [start] + list(p) + [start] 

    return best_path, min_cost 
  

# Input
n = int(input("City number: ")) 
graph = [] 
print("Enter matrix:") 

for i in range(n):
    graph.append(list(map(int, input().split()))) 

start = int(input("Start city: ")) 

# Output
path, cost = tsp(graph, start) 
print("Path:", path) 
print("Cost:", cost)