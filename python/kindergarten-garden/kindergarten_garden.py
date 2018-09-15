import enum
class Garden(object):
    def __init__(self, diagram, students = ['Alice', 'Bob', 'Charlie', 'David',
                                            'Eve', 'Fred', 'Ginny', 'Harriet',
                                            'Ileana', 'Joseph', 'Kincaid', 'Larry']):
        self._diagram = diagram
        self._students = sorted(students)
    
    def plants(self, student_name):
        student_position = self._students.index(student_name)
        plant_positions = [student_position*2,student_position*2+1]
        plant_rows = self._diagram.split('\n')
        letters = []
        for r in plant_rows:
            for p in plant_positions:
                letters.append(r[p])
        student_plants = self.getPlantNamesFromLetters(letters)
        return student_plants

    def getPlantNamesFromLetters(self, letters):
        return [Plants[l].value for l in letters]

class Plants(enum.Enum):
    V = 'Violets'
    C = 'Clover'
    R = 'Radishes'
    G = 'Grass'