import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  // State Management
  const [counter, setCounter] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Counter Functions
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(0);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dynamic theme colors
  const backgroundColor = isDarkMode ? '#0d1117' : '#ffffff';
  const textColor = isDarkMode ? '#e6edf3' : '#1f2937';
  const counterColor = isDarkMode ? '#58a6ff' : '#2563eb';
  const cardBackground = isDarkMode ? '#161b22' : '#f9fafb';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: textColor }]}>
          Counter App
        </Text>
        <Text style={[styles.subtitle, { color: textColor, opacity: 0.6 }]}>
          Simple & Beautiful
        </Text>
      </View>

      {/* Counter Display Card */}
      <View style={[styles.counterCard, { backgroundColor: cardBackground }]}>
        <Text style={[styles.counterLabel, { color: textColor, opacity: 0.5 }]}>
          Current Count
        </Text>
        <Text style={[styles.counterValue, { color: counterColor }]}>
          {counter}
        </Text>
        <View style={styles.statusBadge}>
          <Text style={[styles.statusText, { color: textColor }]}>
            {counter === 0 ? '⚪ Zero' : counter < 10 ? '🟢 Low' : counter < 50 ? '🟡 Medium' : '🔴 High'}
          </Text>
        </View>
      </View>

      {/* Control Buttons */}
      <View style={styles.controlSection}>
        <View style={styles.mainButtonRow}>
          
          {/* Decrement Button */}
          <TouchableOpacity
            style={[
              styles.actionButton,
              styles.decrementButton,
              counter === 0 && styles.disabledButton
            ]}
            onPress={handleDecrement}
            activeOpacity={0.8}
            disabled={counter === 0}
          >
            <Text style={styles.actionButtonIcon}>−</Text>
            <Text style={styles.actionButtonLabel}>Decrease</Text>
          </TouchableOpacity>

          {/* Increment Button */}
          <TouchableOpacity
            style={[styles.actionButton, styles.incrementButton]}
            onPress={handleIncrement}
            activeOpacity={0.8}
          >
            <Text style={styles.actionButtonIcon}>+</Text>
            <Text style={styles.actionButtonLabel}>Increase</Text>
          </TouchableOpacity>

        </View>

        {/* Reset Button */}
        <TouchableOpacity
          style={[styles.resetButton, { borderColor: textColor + '30' }]}
          onPress={handleReset}
          activeOpacity={0.8}
        >
          <Text style={[styles.resetButtonText, { color: textColor }]}>
            ↻ Reset Counter
          </Text>
        </TouchableOpacity>
      </View>

      {/* Theme Toggle */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.themeToggle, { backgroundColor: cardBackground }]}
          onPress={toggleTheme}
          activeOpacity={0.8}
        >
          <Text style={styles.themeIcon}>
            {isDarkMode ? '☀️' : '🌙'}
          </Text>
          <Text style={[styles.themeText, { color: textColor }]}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  counterCard: {
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  counterLabel: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  counterValue: {
    fontSize: 96,
    fontWeight: 'bold',
    letterSpacing: -2,
  },
  statusBadge: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  controlSection: {
    marginBottom: 40,
  },
  mainButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 16,
  },
  actionButton: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  incrementButton: {
    backgroundColor: '#10b981',
  },
  decrementButton: {
    backgroundColor: '#ef4444',
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
    opacity: 0.5,
  },
  actionButtonIcon: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  actionButtonLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    opacity: 0.9,
  },
  resetButton: {
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 2,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    gap: 12,
  },
  themeIcon: {
    fontSize: 24,
  },
  themeText: {
    fontSize: 16,
    fontWeight: '600',
  },
});