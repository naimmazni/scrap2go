'use client'

// Contact Support Screen - Live chat or support ticket
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  Header,
  Input,
  ScreenContainer,
  ScrollableContent,
  FixedBottomContainer
} from '@/components/ui';

const ContactSupportScreen: React.FC = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('chat');
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    category: '',
  });

  const contactMethods = [
    {
      id: 'chat',
      name: 'Live Chat',
      description: 'Chat with support agent',
      icon: 'chat',
      available: true,
      responseTime: 'Usually responds in 2-5 minutes',
    },
    {
      id: 'email',
      name: 'Email Support',
      description: 'Get help via email',
      icon: 'email',
      available: true,
      responseTime: 'Usually responds within 24 hours',
    },
    {
      id: 'phone',
      name: 'Phone Call',
      description: 'Speak with an agent',
      icon: 'call',
      available: true,
      responseTime: 'Mon-Fri, 9am-6pm',
    },
  ];

  const categories = [
    'Technical Issue',
    'Payment Problem',
    'Valuation Query',
    'Towing Schedule',
    'Document Issue',
    'Account Help',
    'Other',
  ];

  const handleSubmit = () => {
    if (selectedMethod === 'chat') {
      alert('Starting live chat...');
      // In real app, open chat widget
    } else if (selectedMethod === 'phone') {
      window.location.href = 'tel:+60123456789';
    } else {
      alert('Support ticket submitted!');
      router.back();
    }
  };

  const isFormValid = selectedMethod === 'chat' || 
    (formData.category && formData.subject && formData.message);

  return (
    <ScreenContainer>
      <Header
        title="Contact Support"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={120}>
        {/* Support Methods */}
        <div style={{ padding: theme.spacing.md }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.md,
          }}>
            How would you like to contact us?
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.sm,
          }}>
            {contactMethods.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                style={{
                  padding: theme.spacing.md,
                  backgroundColor: selectedMethod === method.id
                    ? withOpacity(theme.colors.primary, 0.1)
                    : theme.colors.surfaceLight,
                  borderRadius: theme.borderRadius.lg,
                  border: `2px solid ${selectedMethod === method.id
                    ? theme.colors.primary
                    : theme.colors.borderLight}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing.md,
                  transition: `all ${theme.transitions.fast}`,
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: theme.borderRadius.full,
                  backgroundColor: selectedMethod === method.id
                    ? theme.colors.surfaceLight
                    : theme.colors.gray100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon
                    name={method.icon}
                    size={24}
                    color={selectedMethod === method.id
                      ? theme.colors.primary
                      : theme.colors.textSecondary}
                  />
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <p style={{
                    fontSize: theme.fontSizes.base,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                    marginBottom: 2,
                  }}>
                    {method.name}
                  </p>
                  <p style={{
                    fontSize: theme.fontSizes.xs,
                    color: theme.colors.textSecondary,
                  }}>
                    {method.responseTime}
                  </p>
                </div>
                {selectedMethod === method.id && (
                  <Icon name="check_circle" size={24} color={theme.colors.primary} filled />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form (for email support) */}
        {selectedMethod === 'email' && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <Card>
              <p style={{
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
                marginBottom: theme.spacing.md,
              }}>
                Submit a Support Ticket
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing.md,
              }}>
                {/* Category */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                    marginBottom: theme.spacing.sm,
                  }}>
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: '100%',
                      height: 48,
                      padding: `0 ${theme.spacing.md}`,
                      backgroundColor: theme.colors.gray50,
                      borderRadius: theme.borderRadius.lg,
                      border: `1px solid ${theme.colors.borderLight}`,
                      fontSize: theme.fontSizes.base,
                      color: formData.category ? theme.colors.textPrimary : theme.colors.textMuted,
                    }}
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <Input
                  label="Subject *"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Brief description of your issue"
                />

                {/* Message */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                    marginBottom: theme.spacing.sm,
                  }}>
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please provide details about your issue..."
                    rows={5}
                    style={{
                      width: '100%',
                      padding: theme.spacing.md,
                      backgroundColor: theme.colors.gray50,
                      borderRadius: theme.borderRadius.lg,
                      border: `1px solid ${theme.colors.borderLight}`,
                      fontSize: theme.fontSizes.base,
                      resize: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Phone Info */}
        {selectedMethod === 'phone' && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <Card>
              <div style={{ textAlign: 'center', padding: theme.spacing.md }}>
                <Icon name="call" size={48} color={theme.colors.primary} />
                <p style={{
                  fontSize: theme.fontSizes.lg,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textPrimary,
                  marginTop: theme.spacing.md,
                  marginBottom: theme.spacing.xs,
                }}>
                  Call Us Now
                </p>
                <a
                  href="tel:+60123456789"
                  style={{
                    fontSize: theme.fontSizes.xl,
                    fontWeight: theme.fontWeights.bold,
                    color: theme.colors.primary,
                    textDecoration: 'none',
                  }}
                >
                  +60 12-345 6789
                </a>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  color: theme.colors.textSecondary,
                  marginTop: theme.spacing.md,
                }}>
                  Available: Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM (MYT)
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* Chat Info */}
        {selectedMethod === 'chat' && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <Card style={{
              backgroundColor: withOpacity(theme.colors.primary, 0.05),
              border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
            }}>
              <div style={{ display: 'flex', gap: theme.spacing.sm }}>
                <Icon name="info" size={20} color={theme.colors.primary} />
                <div>
                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                    marginBottom: 4,
                  }}>
                    Live Chat Available
                  </p>
                  <p style={{
                    fontSize: theme.fontSizes.xs,
                    color: theme.colors.textSecondary,
                    lineHeight: 1.5,
                  }}>
                    Connect with a support agent instantly. Average response time is 2-5 minutes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Additional Help Resources */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.md,
          }}>
            Before contacting support
          </p>
          <Card style={{ backgroundColor: theme.colors.gray50 }}>
            <button
              onClick={() => router.push('/help-center')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: theme.spacing.sm,
                backgroundColor: 'transparent',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
                <Icon name="help_outline" size={20} color={theme.colors.primary} />
                <span style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.medium,
                  color: theme.colors.textPrimary,
                }}>
                  Check our Help Center
                </span>
              </div>
              <Icon name="chevron_right" size={20} color={theme.colors.textMuted} />
            </button>
          </Card>
        </div>
      </ScrollableContent>

      <FixedBottomContainer>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isFormValid}
          onClick={handleSubmit}
          icon={selectedMethod === 'chat' ? 'chat' : selectedMethod === 'phone' ? 'call' : 'send'}
        >
          {selectedMethod === 'chat' ? 'Start Live Chat' : 
           selectedMethod === 'phone' ? 'Call Now' : 'Submit Ticket'}
        </Button>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default ContactSupportScreen;



