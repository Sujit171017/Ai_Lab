import random
SILENT="Silent"
CONFESS="Confess"
def payoff(a,b):
    if a==SILENT and b==SILENT:
        return(1,1)
    elif a==SILENT and b==CONFESS:
        return(20,0)
    elif a==CONFESS and b==SILENT:
        return(0,20)
    else:
        return(5,5)
def random_choice():
    return random.choice([SILENT,CONFESS])
def cooperative_choice():
    return random.choices([SILENT,CONFESS],weights=[0.7,0.3])[0]
pairs=100
rounds=10
no_comm_total=[0,0]
with_comm_total=[0,0]
for _ in range(pairs):
    for r in range(rounds):
        if r<5:
            a= random_choice()
            b=random_choice()
            p1,p2=payoff(a,b)
            no_comm_total[0]+=p1
            no_comm_total[1]+=p2
        else:
            a= cooperative_choice()
            b= cooperative_choice()
            p1,p2=payoff(a,b)
            with_comm_total[0]+=p1
            with_comm_total[1]+=p2
print("Average (No COmmunication)")
print("Saikat:",no_comm_total[0]/(pairs*5),"years")
print("Amit:",no_comm_total[1]/(pairs*5),"years")
print("Average (With COmmunication)")
print("Saikat:",with_comm_total[0]/(pairs*5),"years")
print("Amit:",with_comm_total[1]/(pairs*5),"years")