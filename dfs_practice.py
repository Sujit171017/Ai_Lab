def dfs(graph, start):
    visited = set()
    stack = [start]
    order = []

    print(f"START: Starting from node '{start}'")

    while stack:
        node = stack.pop()

        if node not in visited:
            visited.add(node)
            order.append(node)

            # safe get (if node not in graph)
            for neighbor in reversed(graph.get(node, [])):
                if neighbor not in visited:
                    stack.append(neighbor)

    print(f"\nDONE! Final DFS traversal order: {order}")
    return order


# ---------------- USER INPUT GRAPH ----------------

graph = {}

n = int(input("How many nodes? "))

for _ in range(n):
    node = input("Enter node: ").strip()
    neighbors = input(f"Enter neighbors of {node} (space separated, press enter if none): ").split()
    graph[node] = neighbors

start_node = input("Enter starting node: ").strip()

dfs(graph, start_node)