import enum

class Allergies(object):

    def __init__(self, score):
        self._score = score

    def is_allergic_to(self, item):
        return bool(self._score & Allergens[item].value)

    @property
    def lst(self):
        return [allergen.name for allergen in Allergens if (self._score & allergen.value)]

class Allergens(enum.Flag):
    eggs = 0b00000001
    peanuts = 0b00000010
    shellfish = 0b00000100
    strawberries = 0b00001000
    tomatoes = 0b00010000
    chocolate = 0b00100000
    pollen = 0b01000000
    cats = 0b10000000
