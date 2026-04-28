# Breadth First Search (BFS) using Adjacency Matrix

a = [[0 for _ in range(20)] for _ in range(20)]
q = [0] * 20
visited = [0] * 20

f = 0
r = -1

def bfs(v, n):
    global f, r

    for i in range(1, n + 1):
        if a[v][i] and not visited[i]:
            r += 1
            q[r] = i
            visited[i] = 1  # ✅ enqueue করার সময়ই mark করো

    if f <= r:
        next_v = q[f]
        f += 1            # ✅ recursive call এর আগে f বাড়াও
        bfs(next_v, n)

# Main Program
n = int(input("Enter the number of vertices: "))

print("Enter graph data in matrix form:")
for i in range(1, n + 1):
    row = list(map(int, input().split()))
    for j in range(1, n + 1):
        a[i][j] = row[j - 1]

v = int(input("Enter the starting vertex: "))

visited[v] = 1
bfs(v, n)

print("The nodes which are reachable are:")
all_reachable = True
for i in range(1, n + 1):
    if visited[i]:a 
        print(i, end="\t")
    else:
        print("\nBFS is not possible. Not all nodes are reachable")
        all_reachable = False
        break