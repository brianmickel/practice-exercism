def hey(phrase):
    if is_addressed_nothing_said(phrase):
        return 'Fine. Be that way!'
    elif is_question(phrase) and is_yell(phrase):
        return 'Calm down, I know what I\'m doing!'
    elif is_question(phrase):
        return 'Sure.'
    elif is_yell(phrase):
        return 'Whoa, chill out!'
    else:
        return 'Whatever.'

def is_question(phrase):
    return phrase.rstrip()[-1] == "?"

def is_yell(phrase):
    return contains_letters(phrase) and (phrase.upper() == phrase)

def is_addressed_nothing_said(phrase):
    return "" == phrase.strip()

def contains_letters(phrase):
    return any(c.isalpha() for c in phrase)

def contains_alphanumerics(phrase):
    return any(c.isalnum() for c in phrase)

