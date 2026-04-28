import random

SIMS = 100
ROUNDS = 10
RISKS = [10, 25, 40, 55, 70, 85]

def choice(risk):
    if random.random() < (100 - risk) / 100:
        return "STAG"
    else:
        return "HARE"

def payoff(a, b):
    if a == "STAG" and b == "STAG":
        return 10
    elif a == "HARE" and b == "HARE":
        return 7
    else:
        return 3

print("RISK   STAG%   HARE%   AVG Payoff")

for risk in RISKS:
    stag = 0
    hare = 0
    total = 0

    for _ in range(SIMS):
        for _ in range(ROUNDS):

            a = choice(risk)
            b = choice(risk)

            # count choices
            if a == "STAG":
                stag += 1
            else:
                hare += 1

            # add payoff
            total += payoff(a, b)

    total_moves = stag + hare

    print(
        risk, "   ",
        round(stag / total_moves * 100, 2), "%   ",
        round(hare / total_moves * 100, 2), "%   ",
        round(total / total_moves, 2)
    )