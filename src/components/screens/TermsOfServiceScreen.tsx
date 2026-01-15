'use client'

// Terms of Service Screen - Full terms document
import React from 'react';
import { useRouter } from 'next/navigation';
import { theme } from '@/lib/theme';
import { 
  Header,
  ScreenContainer,
  ScrollableContent
} from '@/components/ui';

const TermsOfServiceScreen: React.FC = () => {
  const router = useRouter();

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using the Scrap2Go mobile application ("App"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this App.',
    },
    {
      title: '2. Service Description',
      content: 'Scrap2Go provides a platform for vehicle scrapping and deregistration services in Malaysia. Our services include AI-based vehicle valuation, document processing, JPJ deregistration, and towing/pickup coordination.',
    },
    {
      title: '3. User Responsibilities',
      content: 'Users must: (a) Provide accurate and truthful information; (b) Own or have legal authority over the vehicle being scrapped; (c) Ensure all documents provided are genuine and valid; (d) Make the vehicle accessible at the scheduled pickup time and location.',
    },
    {
      title: '4. Valuation Process',
      content: 'The AI-generated valuation is an estimate based on current market conditions and information provided. The final payout may vary if discrepancies are found during physical inspection. Valuations are valid for 7 days from the date of issuance.',
    },
    {
      title: '5. Payment Terms',
      content: 'Payment will be processed after vehicle collection and verification. Bank transfers typically take 1-3 business days. Scrap2Go is not responsible for delays caused by banking institutions or incorrect bank details provided by users.',
    },
    {
      title: '6. Cancellation Policy',
      content: 'Users may cancel their booking up to 24 hours before the scheduled pickup time without penalty. Cancellations made less than 24 hours in advance may incur a cancellation fee.',
    },
    {
      title: '7. JPJ Deregistration',
      content: 'Scrap2Go will process JPJ deregistration on behalf of users. Users will receive an official JPJ certificate upon successful deregistration. The timeline for deregistration depends on JPJ processing times.',
    },
    {
      title: '8. Privacy and Data Protection',
      content: 'We collect and process personal information in accordance with Malaysian Personal Data Protection Act 2010 (PDPA). Your data is encrypted and stored securely. We do not share your information with third parties without consent.',
    },
    {
      title: '9. Limitation of Liability',
      content: 'Scrap2Go shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the service.',
    },
    {
      title: '10. Intellectual Property',
      content: 'All content, trademarks, and intellectual property in the App are owned by Scrap2Go or licensed to us. Users may not copy, modify, or distribute our content without permission.',
    },
    {
      title: '11. Dispute Resolution',
      content: 'Any disputes arising from these terms shall be resolved through arbitration in accordance with Malaysian law. The jurisdiction shall be the courts of Kuala Lumpur, Malaysia.',
    },
    {
      title: '12. Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. Users will be notified of significant changes. Continued use of the App after changes constitutes acceptance of the new terms.',
    },
    {
      title: '13. Contact Information',
      content: 'For questions about these Terms of Service, please contact us at:\nEmail: legal@scrap2go.com\nPhone: +60 12-345 6789\nAddress: Suite 5-01, Plaza Damansara, Kuala Lumpur',
    },
  ];

  return (
    <ScreenContainer>
      <Header
        title="Terms of Service"
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
          <h1 style={{
            fontSize: theme.fontSizes.xl,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.xs,
          }}>
            Terms of Service
          </h1>
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
            Please read these Terms of Service carefully before using the Scrap2Go application.
          </p>
        </div>

        {/* Content Sections */}
        <div style={{ padding: theme.spacing.md }}>
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
            By using this application, you agree to these Terms of Service.
          </p>
        </div>
      </ScrollableContent>
    </ScreenContainer>
  );
};

export default TermsOfServiceScreen;



