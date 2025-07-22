import { useNotes } from '@/context/NotesContext';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  const { notes } = useNotes();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧭 Semua Catatan</Text>
      {notes.length === 0 ? (
        <Text>Tidak ada catatan.</Text>
      ) : (
        <FlatList 
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text>{item.text}</Text>
              <Button title='Hapus' />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20 },
});
