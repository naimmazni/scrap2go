'use client'

// Appearance Settings Screen - Dark/light mode toggle
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  Header,
  ScreenContainer,
  ScrollableContent
} from '@/components/ui';

const AppearanceSettingsScreen: React.FC = () => {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [autoTheme, setAutoTheme] = useState(false);

  const themes = [
    {
      id: 'light',
      name: 'Light Mode',
      description: 'Clean and bright interface',
      icon: 'light_mode',
      preview: '#FFFFFF',
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      description: 'Easy on the eyes',
      icon: 'dark_mode',
      preview: '#1F2937',
    },
    {
      id: 'auto',
      name: 'Auto',
      description: 'Follow system theme',
      icon: 'brightness_auto',
      preview: 'linear-gradient(90deg, #FFFFFF 0%, #1F2937 100%)',
    },
  ];

  return (
    <ScreenContainer>
      <Header
        title="Appearance"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={20}>
        {/* Theme Selection */}
        <div style={{ padding: theme.spacing.md }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.md,
          }}>
            Theme Preference
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
          }}>
            {themes.map(themeOption => (
              <button
                key={themeOption.id}
                onClick={() => {
                  setSelectedTheme(themeOption.id);
                  if (themeOption.id !== 'auto') setAutoTheme(false);
                }}
                style={{
                  padding: theme.spacing.md,
                  backgroundColor: selectedTheme === themeOption.id
                    ? withOpacity(theme.colors.primary, 0.1)
                    : theme.colors.surfaceLight,
                  borderRadius: theme.borderRadius.lg,
                  border: `2px solid ${selectedTheme === themeOption.id
                    ? theme.colors.primary
                    : theme.colors.borderLight}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.md,
                  transition: `all ${theme.transitions.fast}`,
                }}
              >
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: theme.borderRadius.lg,
                  background: themeOption.preview,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${theme.colors.borderLight}`,
                  flexShrink: 0,
                }}>
                  <Icon
                    name={themeOption.icon}
                    size={28}
                    color={themeOption.id === 'dark' ? '#fff' : theme.colors.textPrimary}
                  />
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <p style={{
                    fontSize: theme.fontSizes.base,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                  }}>
                    {themeOption.name}
                  </p>
                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.textSecondary,
                    marginTop: 2,
                  }}>
                    {themeOption.description}
                  </p>
                </div>
                {selectedTheme === themeOption.id && (
                  <Icon name="check_circle" size={24} color={theme.colors.primary} filled />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Options */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.md,
          }}>
            Display Options
          </p>

          <Card padding="none">
            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: theme.spacing.md,
              backgroundColor: 'transparent',
              borderBottom: `1px solid ${theme.colors.borderLight}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
                <Icon name="text_fields" size={20} color={theme.colors.textSecondary} />
                <span style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.medium,
                  color: theme.colors.textPrimary,
                }}>
                  Text Size
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
                <span style={{
                  fontSize: theme.fontSizes.sm,
                  color: theme.colors.textSecondary,
                }}>
                  Medium
                </span>
                <Icon name="chevron_right" size={20} color={theme.colors.textMuted} />
              </div>
            </button>

            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: theme.spacing.md,
              backgroundColor: 'transparent',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
                <Icon name="contrast" size={20} color={theme.colors.textSecondary} />
                <span style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.medium,
                  color: theme.colors.textPrimary,
                }}>
                  High Contrast
                </span>
              </div>
              <div style={{
                width: 48,
                height: 24,
                borderRadius: theme.borderRadius.full,
                backgroundColor: theme.colors.gray300,
                position: 'relative',
                cursor: 'pointer',
              }}>
                <div style={{
                  width: 20,
                  height: 20,
                  borderRadius: theme.borderRadius.full,
                  backgroundColor: theme.colors.surfaceLight,
                  position: 'absolute',
                  top: 2,
                  left: 2,
                  boxShadow: theme.shadows.sm,
                }} />
              </div>
            </button>
          </Card>
        </div>

        {/* Preview Card */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card style={{
            backgroundColor: theme.colors.gray50,
          }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="info" size={20} color={theme.colors.textSecondary} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  Coming Soon
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  Dark mode is currently in development and will be available in a future update. Stay tuned!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </ScrollableContent>
    </ScreenContainer>
  );
};

export default AppearanceSettingsScreen;



