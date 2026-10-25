import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../theme';

// Dataset statis DI LUAR komponen: dibuat sekali, tidak dibuat ulang tiap render.
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Andrew Koflin', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Jeremy Tan', prodi: 'Teknologi Informasi' },
  { id: '3', nama: "Eka D'Othopus", prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Lional', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Ronaldo', prodi: 'Teknik Informasi' },
];

export default function DaftarMahasiswaScreen() {
  const [keyword, setKeyword] = useState('');

  // Dijalankan ulang setiap keyword berubah -> hasilnya real-time.
  const hasilFilter = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa"
        placeholderTextColor={colors.muted}
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={hasilFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.kosong}>Data tidak ditemukan!</Text>}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: colors.hairline,
    borderRadius: radius.md,
    paddingHorizontal: spacing.base,
    fontSize: 16,
    color: colors.ink,
    backgroundColor: colors.canvas,
    marginBottom: spacing.base,
  },
  item: {
    backgroundColor: colors.canvas,
    borderWidth: 1,
    borderColor: colors.hairline,
    borderRadius: radius.lg,
    padding: spacing.base,
    marginBottom: spacing.xs,
  },
  nama: { fontSize: 16, fontWeight: '600', color: colors.ink },
  prodi: { fontSize: 14, color: colors.body, marginTop: 2 },
  kosong: {
    textAlign: 'center',
    marginTop: spacing.lg,
    fontSize: 16,
    color: colors.muted,
  },
});