'use client'

// Help Center Screen - FAQs and support articles
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

const HelpCenterScreen: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: 'play_circle' },
    { id: 'valuation', name: 'Valuation', icon: 'attach_money' },
    { id: 'towing', name: 'Towing & Pickup', icon: 'local_shipping' },
    { id: 'payment', name: 'Payment', icon: 'payment' },
    { id: 'documents', name: 'Documents', icon: 'description' },
    { id: 'account', name: 'Account', icon: 'person' },
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How does Scrap2Go work?',
      answer: 'Scrap2Go makes vehicle scrapping simple: 1) Take photos of your car for AI valuation, 2) Upload identity documents for JPJ deregistration, 3) Schedule pickup, and 4) Get paid directly to your bank account. The entire process typically takes 3-5 business days.',
    },
    {
      id: 2,
      category: 'valuation',
      question: 'How is my car valued?',
      answer: 'Our AI analyzes photos of your vehicle considering factors like make, model, year, condition, and current scrap metal prices. You\'ll receive an instant quote that\'s valid for 7 days.',
    },
    {
      id: 3,
      category: 'valuation',
      question: 'Can I negotiate the price?',
      answer: 'The AI-generated price is our best offer based on current market conditions. However, if you believe there are special circumstances, you can contact our support team for a manual review.',
    },
    {
      id: 4,
      category: 'towing',
      question: 'When will my car be picked up?',
      answer: 'You can schedule pickup at your convenience. We offer same-day pickup for urgent cases and flexible scheduling up to 2 weeks in advance. Our tow truck will arrive within the scheduled time slot.',
    },
    {
      id: 5,
      category: 'payment',
      question: 'When will I receive payment?',
      answer: 'Payment is processed immediately after your vehicle is collected. Bank transfers typically take 1-3 business days to reflect in your account.',
    },
    {
      id: 6,
      category: 'payment',
      question: 'What payment methods are accepted?',
      answer: 'We transfer payments directly to your Malaysian bank account. All major banks are supported including Maybank, CIMB, Public Bank, RHB, and more.',
    },
    {
      id: 7,
      category: 'documents',
      question: 'What documents do I need?',
      answer: 'You need: 1) MyKad (National ID), 2) Vehicle Ownership Certificate (VOC/Grant), and 3) Clear photos of your vehicle. All documents can be uploaded through the app.',
    },
    {
      id: 8,
      category: 'documents',
      question: 'Is JPJ deregistration included?',
      answer: 'Yes! We handle the entire JPJ deregistration process for you. You\'ll receive an official JPJ certificate confirming your vehicle has been legally deregistered.',
    },
    {
      id: 9,
      category: 'account',
      question: 'How do I change my phone number?',
      answer: 'Your phone number is your account identifier and cannot be changed. If you need to use a different number, please contact our support team.',
    },
    {
      id: 10,
      category: 'account',
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption to protect your personal information and documents. Your data is never shared with third parties without your consent.',
    },
  ];

  const filteredFaqs = searchQuery
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <ScreenContainer>
      <Header
        title="Help Center"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={20}>
        {/* Search Bar */}
        <div style={{ padding: theme.spacing.md }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            padding: `0 ${theme.spacing.md}`,
            backgroundColor: theme.colors.surfaceLight,
            borderRadius: theme.borderRadius.lg,
            border: `1px solid ${theme.colors.borderLight}`,
            height: 48,
          }}>
            <Icon name="search" size={20} color={theme.colors.textMuted} />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: theme.fontSizes.base,
                color: theme.colors.textPrimary,
              }}
            />
          </div>
        </div>

        {/* Quick Actions */}
        {!searchQuery && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: theme.spacing.sm,
            }}>
              <Card
                onClick={() => router.push('/contact-support')}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: theme.spacing.lg,
                  cursor: 'pointer',
                }}
              >
                <Icon name="chat" size={32} color={theme.colors.primary} />
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginTop: theme.spacing.sm,
                  textAlign: 'center',
                }}>
                  Chat with Us
                </p>
              </Card>

              <Card
                onClick={() => window.location.href = 'tel:+60123456789'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: theme.spacing.lg,
                  cursor: 'pointer',
                }}
              >
                <Icon name="call" size={32} color={theme.colors.primary} />
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginTop: theme.spacing.sm,
                  textAlign: 'center',
                }}>
                  Call Support
                </p>
              </Card>
            </div>
          </div>
        )}

        {/* Categories */}
        {!searchQuery && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <p style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: 1,
              marginBottom: theme.spacing.md,
            }}>
              Browse by Topic
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: theme.spacing.sm,
            }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: theme.spacing.xs,
                    padding: theme.spacing.md,
                    backgroundColor: theme.colors.surfaceLight,
                    borderRadius: theme.borderRadius.lg,
                    border: `1px solid ${theme.colors.borderLight}`,
                  }}
                >
                  <Icon name={category.icon} size={24} color={theme.colors.primary} />
                  <span style={{
                    fontSize: theme.fontSizes.xs,
                    fontWeight: theme.fontWeights.medium,
                    color: theme.colors.textPrimary,
                    textAlign: 'center',
                    lineHeight: 1.2,
                  }}>
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textSecondary,
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: theme.spacing.md,
          }}>
            {searchQuery ? 'Search Results' : 'Frequently Asked Questions'}
          </p>

          {filteredFaqs.length === 0 ? (
            <Card>
              <div style={{
                textAlign: 'center',
                padding: theme.spacing.xl,
              }}>
                <Icon name="search_off" size={48} color={theme.colors.textMuted} />
                <p style={{
                  fontSize: theme.fontSizes.base,
                  color: theme.colors.textSecondary,
                  marginTop: theme.spacing.md,
                }}>
                  No results found for "{searchQuery}"
                </p>
              </div>
            </Card>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing.sm,
            }}>
              {filteredFaqs.map(faq => (
                <Card
                  key={faq.id}
                  padding="none"
                  style={{ overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    style={{
                      width: '100%',
                      padding: theme.spacing.md,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: theme.spacing.sm,
                      backgroundColor: 'transparent',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontSize: theme.fontSizes.base,
                      fontWeight: theme.fontWeights.semibold,
                      color: theme.colors.textPrimary,
                    }}>
                      {faq.question}
                    </span>
                    <Icon
                      name="expand_more"
                      size={24}
                      color={theme.colors.textMuted}
                      style={{
                        transform: expandedFaq === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: `transform ${theme.transitions.fast}`,
                      }}
                    />
                  </button>
                  {expandedFaq === faq.id && (
                    <div style={{
                      padding: theme.spacing.md,
                      paddingTop: 0,
                      borderTop: `1px solid ${theme.colors.borderLight}`,
                    }}>
                      <p style={{
                        fontSize: theme.fontSizes.sm,
                        color: theme.colors.textSecondary,
                        lineHeight: 1.6,
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Still Need Help */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card style={{
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
            border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
            textAlign: 'center',
          }}>
            <Icon name="support_agent" size={40} color={theme.colors.primary} />
            <p style={{
              fontSize: theme.fontSizes.base,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              marginTop: theme.spacing.sm,
              marginBottom: theme.spacing.xs,
            }}>
              Still need help?
            </p>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
              marginBottom: theme.spacing.md,
            }}>
              Our support team is here to help
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={() => router.push('/contact-support')}
            >
              Contact Support
            </Button>
          </Card>
        </div>
      </ScrollableContent>
    </ScreenContainer>
  );
};

export default HelpCenterScreen;



