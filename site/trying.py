def solution(strArr):
    source = (0,0)
    destination = (3,3)
    shortest_path(strArr, source, destination, len(matrix))
    return

def shortest_path(matrix, source, destination, n):
    visited = [[False for i in range(n)] for j in range(n)]
    visited[source[0]][source[1]] = True

    queue = []
    queue.append(source)
    while(len(queue) > 0):
        row, col = queue.pop()
        if(destination in [(row+1, col, (row-1, col), (row, col+1), (row, col-1)]):
            return count + 1

        queue.append()


#strArr = ["OOOO", "OOFF", "OCHO", "OFOO"]
strArr = ["FOOF", "OCOO", "OOOH", "FOOO"]
print(solution(inp))
