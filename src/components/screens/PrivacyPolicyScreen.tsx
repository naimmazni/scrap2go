'use client'

// Privacy Policy Screen - Privacy policy document
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon,
  Card,
  Header,
  ScreenContainer,
  ScrollableContent
} from '@/components/ui';

const PrivacyPolicyScreen: React.FC = () => {
  const router = useRouter();

  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information that you provide directly to us, including:\n\nâ€¢ Personal Information: Name, phone number, email address, IC number\nâ€¢ Vehicle Information: Registration number, make, model, year, photos\nâ€¢ Financial Information: Bank account details for payouts\nâ€¢ Location Data: Pickup addresses and GPS coordinates\nâ€¢ Device Information: Device type, operating system, unique identifiers',
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the collected information to:\n\nâ€¢ Provide and improve our vehicle scrapping services\nâ€¢ Process JPJ deregistration\nâ€¢ Facilitate payments and payouts\nâ€¢ Coordinate towing and pickup services\nâ€¢ Send service updates and notifications\nâ€¢ Comply with legal obligations\nâ€¢ Prevent fraud and ensure security',
    },
    {
      title: '3. Information Sharing',
      content: 'We may share your information with:\n\nâ€¢ Service Providers: Towing partners, payment processors\nâ€¢ Government Agencies: JPJ for deregistration purposes\nâ€¢ Legal Authorities: When required by law\n\nWe do NOT sell your personal information to third parties for marketing purposes.',
    },
    {
      title: '4. Data Security',
      content: 'We implement industry-standard security measures:\n\nâ€¢ End-to-end encryption for data transmission\nâ€¢ Secure storage with access controls\nâ€¢ Regular security audits\nâ€¢ Employee confidentiality agreements\n\nHowever, no method of transmission over the internet is 100% secure.',
    },
    {
      title: '5. Data Retention',
      content: 'We retain your personal information for as long as necessary to:\n\nâ€¢ Provide our services\nâ€¢ Comply with legal obligations (7 years for financial records)\nâ€¢ Resolve disputes and enforce agreements\n\nYou may request deletion of your data subject to legal requirements.',
    },
    {
      title: '6. Your Rights',
      content: 'Under Malaysian PDPA, you have the right to:\n\nâ€¢ Access your personal data\nâ€¢ Correct inaccurate information\nâ€¢ Withdraw consent for data processing\nâ€¢ Request data deletion\nâ€¢ Limit data processing\nâ€¢ Data portability\n\nContact us to exercise these rights.',
    },
    {
      title: '7. Cookies and Tracking',
      content: 'We use cookies and similar technologies to:\n\nâ€¢ Remember your preferences\nâ€¢ Analyze app usage and performance\nâ€¢ Provide personalized content\nâ€¢ Improve user experience\n\nYou can control cookie settings in your device preferences.',
    },
    {
      title: '8. Third-Party Services',
      content: 'Our app may contain links to third-party services:\n\nâ€¢ Google Maps for location services\nâ€¢ Payment gateway providers\nâ€¢ Social media platforms\n\nThese services have their own privacy policies. We are not responsible for their practices.',
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our services are not intended for individuals under 18 years of age. We do not knowingly collect information from children. If you believe we have collected data from a child, please contact us immediately.',
    },
    {
      title: '10. International Data Transfers',
      content: 'Your information may be transferred to and processed in countries outside Malaysia. We ensure appropriate safeguards are in place to protect your data in accordance with PDPA requirements.',
    },
    {
      title: '11. Changes to Privacy Policy',
      content: 'We may update this Privacy Policy periodically. We will notify you of significant changes through the app or via email. Your continued use after changes constitutes acceptance.',
    },
    {
      title: '12. Contact Us',
      content: 'For privacy-related questions or concerns:\n\nData Protection Officer\nEmail: privacy@scrap2go.com\nPhone: +60 12-345 6789\nAddress: Suite 5-01, Plaza Damansara\nJalan Semantan, 50490 Kuala Lumpur\n\nWe aim to respond within 14 days.',
    },
  ];

  return (
    <ScreenContainer>
      <Header
        title="Privacy Policy"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={20}>
        {/* Header Info */}
        <div style={{
          padding: theme.spacing.lg,
          backgroundColor: theme.colors.surfaceLight,
          borderBottom: `1px solid ${theme.colors.borderLight}`,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            marginBottom: theme.spacing.md,
          }}>
            <Icon name="privacy_tip" size={32} color={theme.colors.primary} />
            <h1 style={{
              fontSize: theme.fontSizes.xl,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textPrimary,
            }}>
              Privacy Policy
            </h1>
          </div>
          <p style={{
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textSecondary,
          }}>
            Last Updated: January 15, 2026
          </p>
          <p style={{
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textSecondary,
            marginTop: theme.spacing.sm,
            lineHeight: 1.6,
          }}>
            At Scrap2Go, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>

        {/* PDPA Compliance Badge */}
        <div style={{ padding: theme.spacing.md }}>
          <Card style={{
            backgroundColor: withOpacity('#10B981', 0.05),
            border: `1px solid ${withOpacity('#10B981', 0.2)}`,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.sm,
            }}>
              <Icon name="verified_user" size={24} color="#10B981" />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                }}>
                  PDPA Compliant
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                }}>
                  Complies with Malaysian Personal Data Protection Act 2010
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Content Sections */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          {sections.map((section, index) => (
            <div
              key={index}
              style={{
                marginBottom: theme.spacing.lg,
                paddingBottom: theme.spacing.lg,
                borderBottom: index < sections.length - 1 
                  ? `1px solid ${theme.colors.borderLight}` 
                  : 'none',
              }}
            >
              <h2 style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
                marginBottom: theme.spacing.sm,
              }}>
                {section.title}
              </h2>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                lineHeight: 1.7,
                whiteSpace: 'pre-line',
              }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div style={{
          padding: theme.spacing.lg,
          backgroundColor: theme.colors.gray50,
          borderTop: `1px solid ${theme.colors.borderLight}`,
        }}>
          <p style={{
            fontSize: theme.fontSizes.xs,
            color: theme.colors.textMuted,
            textAlign: 'center',
            lineHeight: 1.6,
          }}>
            Â© 2026 Scrap2Go. All rights reserved.
            <br />
            Your privacy is important to us.
          </p>
        </div>
      </ScrollableContent>
    </ScreenContainer>
  );
};

export default PrivacyPolicyScreen;



