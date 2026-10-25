import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../theme';

// Pemetaan status -> warna. Mudah ditambah kalau ada status baru.
const WARNA_STATUS = {
  selesai: colors.success,
  proses: colors.progress,
};

export default function InfoCard({ title, status, onPress }) {
  // Kalau status tidak dikenal, pakai abu-abu agar tidak error.
  const warna = WARNA_STATUS[status] ?? colors.muted;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.badge, { backgroundColor: warna }]}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.canvas,
    borderWidth: 1,
    borderColor: colors.hairline,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.base,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.ink,
    marginBottom: spacing.sm,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.pill,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginBottom: spacing.base,
  },
  badgeText: {
    color: colors.onPrimary,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.88,
    textTransform: 'uppercase',
  },
  button: {
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.onPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
});