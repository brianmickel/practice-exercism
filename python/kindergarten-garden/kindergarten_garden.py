import enum
class Garden(object):
    def __init__(self, diagram, students = ['Alice', 'Bob', 'Charlie', 'David',
                                            'Eve', 'Fred', 'Ginny', 'Harriet',
                                            'Ileana', 'Joseph', 'Kincaid', 'Larry']):
        self.diagram = diagram.splitlines()
        self.students = sorted(students)
    
    def plants(self, student_name):
        p = self.students.index(student_name)*2
        letters = "".join([row[p:p+2] for row in self.diagram])
        student_plants = [Plants[l].value for l in letters]
        return student_plants   

class Plants(enum.Enum):
    V = 'Violets'
    C = 'Clover'
    R = 'Radishes'
    G = 'Grass'