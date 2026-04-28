from itertools import permutations

n=int(input("city number:"))
graph=[]
print("Enter matrix:")

for i in range(n):
    graph.append(list(map(int,input().split())))
start=int(input("start city:"))

def tsp(graph,start):
    n=len(graph)
    nodes=[i for i in range(n) if i!=start]

    min_cost=float('inf')
    best_path=[]

    for p in permutations(nodes):
        cost=0
        current=start

        for city in p:
            cost+=graph[current][city]
            current=city
        cost+=graph[current][start]

        if cost<min_cost:
            min_cost=cost
            best_path=[start]+list(p)+[start]
    return best_path,min_cost


#start=int(input("start city:"))
path,cost=tsp(graph,start)

print("Best path:",path)
print("Minimum cost:",cost)
