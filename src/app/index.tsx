import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

type Student = {
  id: string;
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Course: {course}</Text>
      <Text style={styles.info}>Units: {units}</Text>

      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

export default function StudentRoster() {
  const [students, setStudents] = useState<Student[]>([
    { id: 's1', name: 'Ana Cruz', course: 'IT313', units: 21, isFullLoad: true },
    { id: 's2', name: 'Bea Santos', course: 'IT313', units: 15, isFullLoad: false },
    { id: 's3', name: 'Cid Ramos', course: 'IT313', units: 18, isFullLoad: true },
    { id: 's4', name: 'Dex Alonzo', course: 'IT313', units: 12, isFullLoad: false },
  ]);

  const reverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Student Roster ({students.length} students)
      </Text>

      <Button title="Reverse Roster" onPress={reverseRoster} />

      <View style={styles.list}>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
  },
  list: {
    marginTop: 15,
  },
  card: {
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  info: {
    color: 'white',
  },
  fullLoad: {
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white',
  },
});