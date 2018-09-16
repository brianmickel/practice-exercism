import enum
class Garden(object):
    def __init__(self, diagram, students = ['Alice', 'Bob', 'Charlie', 'David',
                                            'Eve', 'Fred', 'Ginny', 'Harriet',
                                            'Ileana', 'Joseph', 'Kincaid', 'Larry']):
        self._diagram = diagram
        self._students = sorted(students)
    
    def plants(self, student_name):
        plant_positions = self.getPlantPositionsFromStudentName(student_name)
        plant_rows = self._diagram.split('\n')
        letters = self.getPlantLettersFromRows(plant_rows, plant_positions)
        student_plants = self.getPlantNamesFromLetters(letters)
        return student_plants

    def getPlantPositionsFromStudentName(self, student_name):
        student_position = self._students.index(student_name)
        return [student_position*2,student_position*2+1]

    def getPlantLettersFromRows(self, rows, positions):
        letters = []
        for r in rows:
            for p in positions:
                letters.append(r[p])
        return letters
        
    def getPlantNamesFromLetters(self, letters):
        return [Plants[l].value for l in letters]
    

class Plants(enum.Enum):
    V = 'Violets'
    C = 'Clover'
    R = 'Radishes'
    G = 'Grass'