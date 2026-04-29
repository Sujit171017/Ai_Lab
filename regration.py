import numpy as np
import matplotlib.pyplot as plt

# Input data
x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 5, 4, 5])

n = len(x)

# Calculate slope and intercept
b = (n*np.sum(x*y) - np.sum(x)*np.sum(y)) / (n*np.sum(x*x) - (np.sum(x))**2)
a = (np.sum(y) - b*np.sum(x)) / n

print("Intercept =", a)
print("Slope =", b)

# Predicted values
y_pred = a + b*x

# Plot graph
plt.scatter(x, y, color='blue', label='Data Points')
plt.plot(x, y_pred, color='red', label='Regression Line')
plt.xlabel("X")
plt.ylabel("Y")
plt.title("Simple Linear Regression")
plt.legend()
plt.show()