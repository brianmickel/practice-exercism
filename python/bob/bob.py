def hey(phrase):
    phrase = phrase.strip()
    if is_addressed_nothing_said(phrase):
        return 'Fine. Be that way!'
    elif is_question(phrase):
        if is_yell(phrase):
            return 'Calm down, I know what I\'m doing!'
        else:
            return 'Sure.'
    elif is_yell(phrase):
        return 'Whoa, chill out!'
    else:
        return 'Whatever.'

def is_question(phrase):
    return phrase.endswith("?")

def is_yell(phrase):
    return phrase.isupper()

def is_addressed_nothing_said(phrase):
    return not phrase


