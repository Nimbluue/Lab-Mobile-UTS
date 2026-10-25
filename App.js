import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoCard from './src/components/InfoCard';
import DaftarMahasiswaScreen from './src/screens/DaftarMahasiswaScreen';
import { colors, radius, spacing } from './src/theme';

export default function App() {
  // Tab sederhana supaya layar tidak sempit saat keyboard muncul.
  const [tab, setTab] = useState('soal1');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, tab === 'soal1' && styles.tabAktif]}
          onPress={() => setTab('soal1')}
        >
          <Text style={[styles.tabText, tab === 'soal1' && styles.tabTextAktif]}>Soal 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'soal2' && styles.tabAktif]}
          onPress={() => setTab('soal2')}
        >
          <Text style={[styles.tabText, tab === 'soal2' && styles.tabTextAktif]}>Soal 2</Text>
        </TouchableOpacity>
      </View>

      {tab === 'soal1' ? (
        <View>
          <Text style={styles.heading}>Daftar Tugas</Text>

          {/* InfoCard dipakai 2x dengan data berbeda */}
          <InfoCard
            title="Laporan Praktikum Mobile"
            status="selesai"
            onPress={() => Alert.alert('Detail', 'Laporan Praktikum Mobile sudah selesai.')}
          />
          <InfoCard
            title="Tugas Akhir Basis Data"
            status="proses"
            onPress={() => Alert.alert('Detail', 'Tugas Akhir Basis Data masih dikerjakan.')}
          />
        </View>
      ) : (
        <View style={styles.flex}>
          <Text style={styles.heading}>Direktori Mahasiswa</Text>
          <DaftarMahasiswaScreen />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.canvasSoft,
    paddingTop: 56,
    paddingHorizontal: spacing.base,
  },
  flex: { flex: 1 },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.ink,
    letterSpacing: -0.84,
    marginBottom: spacing.base,
  },
  tabs: { flexDirection: 'row', gap: spacing.xs, marginBottom: spacing.lg },
  tab: {
    height: 40,
    paddingHorizontal: 18,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.hairline,
    backgroundColor: colors.canvas,
    justifyContent: 'center',
  },
  tabAktif: { backgroundColor: colors.primary, borderColor: colors.primary },
  tabText: { fontSize: 14, fontWeight: '500', color: colors.ink },
  tabTextAktif: { color: colors.onPrimary },
});