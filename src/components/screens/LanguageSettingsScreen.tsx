'use client'

// Language Settings Screen - Change app language
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  PageHeader,
  PageContainer,
  ContentArea
} from '@/components/ui';

const LanguageSettingsScreen: React.FC = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [hasChanges, setHasChanges] = useState(false);

  const languages = [
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: 'ðŸ‡¬ðŸ‡§',
    },
    {
      code: 'ms',
      name: 'Malay',
      nativeName: 'Bahasa Melayu',
      flag: 'ðŸ‡²ðŸ‡¾',
    },
    {
      code: 'zh',
      name: 'Chinese',
      nativeName: 'ä¸­æ–‡',
      flag: 'ðŸ‡¨ðŸ‡³',
    },
    {
      code: 'ta',
      name: 'Tamil',
      nativeName: 'à®¤à®®à®¿à®´à¯',
      flag: 'ðŸ‡®ðŸ‡³',
    },
  ];

  const handleLanguageSelect = (code: string) => {
    if (code !== selectedLanguage) {
      setSelectedLanguage(code);
      setHasChanges(true);
    }
  };

  const handleSave = () => {
    alert('Language changed successfully! App will reload...');
    // In real app, save to storage and reload
    router.back();
  };

  return (
    <PageContainer>
      <PageHeader
        title="Language"
        showBack
        onBack={() => router.back()}
      />

      <ContentArea>
        {/* Current Language Info */}
        <div style={{ padding: theme.spacing.md }}>
          <Card style={{
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
            border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
          }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="language" size={20} color={theme.colors.primary} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  App Language
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  Select your preferred language for the app interface
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Language Options */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.md,
          }}>
            Available Languages
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.sm,
          }}>
            {languages.map(language => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                style={{
                  padding: theme.spacing.md,
                  backgroundColor: selectedLanguage === language.code
                    ? withOpacity(theme.colors.primary, 0.1)
                    : theme.colors.surfaceLight,
                  borderRadius: theme.borderRadius.lg,
                  border: `2px solid ${selectedLanguage === language.code
                    ? theme.colors.primary
                    : theme.colors.borderLight}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.md,
                  transition: `all ${theme.transitions.fast}`,
                }}
              >
                <span style={{ fontSize: 32 }}>{language.flag}</span>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <p style={{
                    fontSize: theme.fontSizes.base,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                  }}>
                    {language.name}
                  </p>
                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.textSecondary,
                    marginTop: 2,
                  }}>
                    {language.nativeName}
                  </p>
                </div>
                {selectedLanguage === language.code && (
                  <Icon name="check_circle" size={24} color={theme.colors.primary} filled />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Translation Info */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card style={{ backgroundColor: theme.colors.gray50 }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="info" size={20} color={theme.colors.textSecondary} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  Translation Notice
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  Some technical terms and legal documents may remain in English to ensure accuracy. The app will reload when you change the language.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Options */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.md,
          }}>
            Regional Settings
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
                <Icon name="schedule" size={20} color={theme.colors.textSecondary} />
                <span style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.medium,
                  color: theme.colors.textPrimary,
                }}>
                  Time Format
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
                <span style={{
                  fontSize: theme.fontSizes.sm,
                  color: theme.colors.textSecondary,
                }}>
                  12-hour
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
                <Icon name="calendar_today" size={20} color={theme.colors.textSecondary} />
                <span style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.medium,
                  color: theme.colors.textPrimary,
                }}>
                  Date Format
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
                <span style={{
                  fontSize: theme.fontSizes.sm,
                  color: theme.colors.textSecondary,
                }}>
                  DD/MM/YYYY
                </span>
                <Icon name="chevron_right" size={20} color={theme.colors.textMuted} />
              </div>
            </button>
          </Card>
        </div>

        {/* Help Translation */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card style={{
            backgroundColor: withOpacity('#10B981', 0.05),
            border: `1px solid ${withOpacity('#10B981', 0.2)}`,
            textAlign: 'center',
          }}>
            <Icon name="translate" size={40} color="#10B981" />
            <p style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              marginTop: theme.spacing.sm,
              marginBottom: theme.spacing.xs,
            }}>
              Help Us Improve Translations
            </p>
            <p style={{
              fontSize: theme.fontSizes.xs,
              color: theme.colors.textSecondary,
              marginBottom: theme.spacing.md,
            }}>
              Found an incorrect translation? Let us know!
            </p>
            <button style={{
              padding: `${theme.spacing.sm} ${theme.spacing.md}`,
              backgroundColor: 'transparent',
              border: `1px solid ${theme.colors.borderLight}`,
              borderRadius: theme.borderRadius.md,
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
            }}>
              Report Issue
            </button>
          </Card>
        </div>
      </ContentArea>

      {hasChanges && (
        <div style={{
          padding: theme.spacing.md,
          paddingBottom: theme.spacing.lg,
          backgroundColor: theme.colors.surfaceLight,
          borderTop: `1px solid ${theme.colors.borderLight}`,
        }}>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleSave}
            icon="check"
          >
            Apply Changes
          </Button>
        </div>
      )}
    </PageContainer>
  );
};

export default LanguageSettingsScreen;



