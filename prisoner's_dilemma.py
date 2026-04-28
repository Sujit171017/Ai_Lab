# Prisoner's Dilemma Simulation
# Does communication help people cooperate?

import random

# Step 1: Initialize
rounds = 10
sims = 100

# Step 2: Define Payoffs
# C = Cooperate (Silent)
# D = Defect (Confess)

payoff = {
    ("C", "C"): (1, 1),
    ("D", "D"): (5, 5),
    ("C", "D"): (20, 0),
    ("D", "C"): (0, 20)
}

# Step 3: Define Player Strategy
def choose_strategy(rate):
    if random.random() < rate:
        return "C"
    else:
        return "D"

# Step 4: Run Single Simulation
def run_simulation(communication=False):
    base_rate = 0.5   # normal cooperation chance
    
    if communication:
        rate = base_rate + 0.2   # boost cooperation
    else:
        rate = base_rate
    
    coop = 0
    defect = 0
    
    for _ in range(rounds):
        p1 = choose_strategy(rate)
        p2 = choose_strategy(rate)
        
        if p1 == "C" and p2 == "C":
            coop += 1
        else:
            defect += 1
    
    return coop, defect

# Step 5: Run All Simulations
no_comm = []
with_comm = []

for _ in range(sims):
    no_comm.append(run_simulation(False))
    with_comm.append(run_simulation(True))

# Step 6: Calculate Statistics
def calculate_stats(results):
    total_coop = sum(x[0] for x in results)
    total_defect = sum(x[1] for x in results)
    total_rounds = sims * rounds
    
    cooperation_rate = (total_coop / total_rounds) * 100
    defection_rate = (total_defect / total_rounds) * 100
    
    return cooperation_rate, defection_rate

coop1, defect1 = calculate_stats(no_comm)
coop2, defect2 = calculate_stats(with_comm)

increase = coop2 - coop1

# Step 7: Display Results
print("Prisoner's Dilemma Experiment Results")
print("-----------------------------------")

print("Without Communication:")
print("Cooperation Rate =", round(coop1, 2), "%")
print("Defection Rate   =", round(defect1, 2), "%")

print("\nWith Communication:")
print("Cooperation Rate =", round(coop2, 2), "%")
print("Defection Rate   =", round(defect2, 2), "%")

print("\nIncrease in Cooperation Due to Communication =", round(increase, 2), "%")