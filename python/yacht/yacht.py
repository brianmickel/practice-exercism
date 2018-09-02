# Score categories
# Change the values as you see fit
YACHT = "YACHT"
ONES = "ONES"
TWOS = "TWOS"
THREES = "THREES"
FOURS = "FOURS"
FIVES = "FIVES"
SIXES = "SIXES"
FULL_HOUSE = "FULL HOUSE"
FOUR_OF_A_KIND = "FOUR OF A KIND"
LITTLE_STRAIGHT = "LITTLE STRAIGHT"
BIG_STRAIGHT = "BIG STRAIGHT"
CHOICE = "CHOICE"

def score(dice, category):
    dice.sort()
    score_value = 0
    if category == YACHT:
        if sum(dice) == dice[0]*5:
            score_value = 50
    elif category == ONES:
        n = 1
        score_value = sum(d == n for d in dice)*n
    elif category == TWOS:
        n = 2
        score_value = sum(d == n for d in dice)*n
    elif category == THREES:
        n = 3
        score_value = sum(d == n for d in dice)*n
    elif category == FOURS:
        n = 4
        score_value = sum(d == n for d in dice)*n
    elif category == FIVES:
        n = 5
        score_value = sum(d == n for d in dice)*n
    elif category == SIXES:
        n = 6
        score_value = sum(d == n for d in dice)*n
    elif category == FULL_HOUSE:
        val1 = dice[0]
        val2 = dice[4]
        count_val1 = sum(d == val1 for d in dice)
        count_val2 = sum(d == val2 for d in dice)
        counts = [count_val1, count_val2]
        counts.sort()
        if counts == [2,3]:
            score_value = sum(dice)
    elif category == FOUR_OF_A_KIND:
        m = max(dice, key=dice.count)
        count_value = sum(d == m for d in dice)
        if count_value >= 4:
            score_value = m*4
    elif category == LITTLE_STRAIGHT:
        if dice[:5] == [1,2,3,4,5]:
            score_value = 30
    elif category == BIG_STRAIGHT:
        if dice[0:] == [2,3,4,5,6]:
            score_value = 30
    elif category == CHOICE:
        score_value = sum(dice)
    else:
        raise Exception("Not a valid category")
    return score_value

