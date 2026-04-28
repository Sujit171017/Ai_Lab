#DFS
def dfs(graph, start):
    visited = set([start])
    stack = [start]
    order = []

    print(f"START: Starting from node '{start}'")
    while stack:
        node = stack.pop()
        order.append(node)

        for neighbor in reversed(graph[node]):
            if neighbor not in visited:
                visited.add(neighbor)
                stack.append(neighbor)
               

    print(f"\nDONE! Final DFS traversal order: {order}")
    return order

# --- Graph ---
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B'],
    'F': ['C']
}

dfs(graph, 'A')