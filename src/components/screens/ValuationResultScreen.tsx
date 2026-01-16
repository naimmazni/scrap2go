'use client'

// Valuation Result Screen
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, Card, Badge, Divider, PageContainer, PageHeader, ContentArea } from '@/components/ui';

const ValuationResultScreen: React.FC = () => {
  const router = useRouter();
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (faqKey: string) => {
    setExpandedFAQ(expandedFAQ === faqKey ? null : faqKey);
  };

  return (
    <PageContainer>
      <PageHeader
        title="Valuation Result"
        showBack
        onBack={() => router.push('/camera')}
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderBottom: 'none',
        }}
      />

      {/* Main Content */}
      <ContentArea>
        {/* Price Card */}
        <Card
          padding="lg"
          style={{
            marginBottom: theme.spacing.lg,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: -64,
            right: -64,
            width: 128,
            height: 128,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
          }} />
          <div style={{
            position: 'absolute',
            bottom: -48,
            left: -48,
            width: 96,
            height: 96,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
          }} />

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            padding: '4px 12px',
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(theme.colors.primary, 0.1),
            marginBottom: theme.spacing.sm,
          }}>
            <Icon name="verified" size={18} color={theme.colors.primary} />
            <span style={{
              fontSize: theme.fontSizes.xs,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.primary,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}>
              Final Offer
            </span>
          </div>

          <h1 style={{
            fontSize: 48,
            fontWeight: theme.fontWeights.extrabold,
            color: theme.colors.primary,
            marginBottom: theme.spacing.sm,
          }}>
            RM 1,200
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: theme.spacing.lg,
          }}>
            <Icon name="timer" size={18} color={theme.colors.textSecondary} />
            <span style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
            }}>
              Offer valid for 24 hours
            </span>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: theme.spacing.sm,
            justifyContent: 'center',
          }}>
            <Badge variant="gray">
              <Icon name="recycling" size={16} /> Metal Value
            </Badge>
            <Badge variant="gray">
              <Icon name="check_circle" size={16} /> Cond: Fair
            </Badge>
            <Badge variant="gray">
              <Icon name="local_police" size={16} /> Govt Incentive
            </Badge>
          </div>
        </Card>

        {/* Fair Price Guarantee */}
        <Card padding="md" style={{ marginBottom: theme.spacing.lg }}>
          <div style={{ display: 'flex', gap: theme.spacing.md }}>
            <div style={{
              flexShrink: 0,
              width: 56,
              height: 56,
              borderRadius: theme.borderRadius.xl,
              backgroundColor: withOpacity(theme.colors.primary, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="shield_lock" size={28} color={theme.colors.primary} />
            </div>
            <div style={{ flex: 1, paddingTop: 4 }}>
              <h3 style={{
                fontSize: theme.fontSizes.base,
                fontWeight: theme.fontWeights.bold,
                marginBottom: 4,
              }}>
                Fair Price Guarantee
              </h3>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                lineHeight: 1.5,
              }}>
                Our AI valuation is based on real-time scrap metal rates and government incentives. No hidden fees.
              </p>
            </div>
          </div>
        </Card>

        {/* Vehicle Details */}
        <Card padding="none" style={{ marginBottom: theme.spacing.lg, overflow: 'hidden' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing.md,
            borderBottom: `1px solid ${theme.colors.borderLight}`,
          }}>
            <h3 style={{ fontWeight: theme.fontWeights.bold }}>Vehicle Details</h3>
            <button style={{
              color: theme.colors.primary,
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.medium,
            }}>
              Edit
            </button>
          </div>
          <div style={{
            padding: theme.spacing.md,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.md,
          }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: theme.colors.gray100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="directions_car" size={32} color={theme.colors.textMuted} />
            </div>
            <div>
              <p style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.bold,
              }}>
                Proton Saga BLM
              </p>
              <p style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                Plate: WXX 1234
              </p>
              <p style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
                Year: 2010
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
          <button 
            onClick={() => toggleFAQ('calculation')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: theme.spacing.md,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: expandedFAQ === 'calculation' ? withOpacity(theme.colors.primary, 0.1) : 'transparent',
              border: `1px solid ${expandedFAQ === 'calculation' ? theme.colors.primary : theme.colors.borderLight}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}>
            <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
              How is this calculated?
            </span>
            <Icon 
              name={expandedFAQ === 'calculation' ? 'expand_less' : 'expand_more'} 
              size={20} 
              color={expandedFAQ === 'calculation' ? theme.colors.primary : theme.colors.textMuted} 
            />
          </button>
          {expandedFAQ === 'calculation' && (
            <div style={{
              padding: theme.spacing.md,
              backgroundColor: withOpacity(theme.colors.primary, 0.05),
              borderRadius: theme.borderRadius.lg,
              marginBottom: theme.spacing.sm,
              borderLeft: `4px solid ${theme.colors.primary}`,
            }}>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textPrimary,
                lineHeight: 1.6,
                marginBottom: theme.spacing.sm,
              }}>
                <strong>Our AI-powered valuation considers:</strong>
              </p>
              <ul style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                lineHeight: 1.8,
                paddingLeft: theme.spacing.lg,
              }}>
                <li><strong>Scrap Metal Rates:</strong> Real-time commodity prices for steel, aluminum, and copper</li>
                <li><strong>Vehicle Condition:</strong> Photos analyzed by our AI to assess overall condition</li>
                <li><strong>Government Incentives:</strong> Current deregistration rebates and environmental bonuses</li>
                <li><strong>Market Demand:</strong> Current market rates for vehicle parts and materials</li>
              </ul>
            </div>
          )}

          <button 
            onClick={() => toggleFAQ('carProcess')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: theme.spacing.md,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: expandedFAQ === 'carProcess' ? withOpacity(theme.colors.primary, 0.1) : 'transparent',
              border: `1px solid ${expandedFAQ === 'carProcess' ? theme.colors.primary : theme.colors.borderLight}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}>
            <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.textSecondary }}>
              What happens to my car?
            </span>
            <Icon 
              name={expandedFAQ === 'carProcess' ? 'expand_less' : 'expand_more'} 
              size={20} 
              color={expandedFAQ === 'carProcess' ? theme.colors.primary : theme.colors.textMuted} 
            />
          </button>
          {expandedFAQ === 'carProcess' && (
            <div style={{
              padding: theme.spacing.md,
              backgroundColor: withOpacity(theme.colors.primary, 0.05),
              borderRadius: theme.borderRadius.lg,
              marginBottom: theme.spacing.sm,
              borderLeft: `4px solid ${theme.colors.primary}`,
            }}>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textPrimary,
                lineHeight: 1.6,
                marginBottom: theme.spacing.sm,
              }}>
                <strong>Your vehicle will go through these steps:</strong>
              </p>
              <ol style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                lineHeight: 1.8,
                paddingLeft: theme.spacing.lg,
              }}>
                <li><strong>Legal Handover:</strong> You sign documents transferring ownership to us</li>
                <li><strong>JPJ Deregistration:</strong> We complete the official deregistration with JPJ</li>
                <li><strong>Pickup Arrangement:</strong> We schedule a convenient pickup time at your location</li>
                <li><strong>Towing & Collection:</strong> Our team safely tows your vehicle to our facility</li>
                <li><strong>Payment Release:</strong> Your payment is transferred to your bank account within 2 hours</li>
              </ol>
            </div>
          )}
        </div>
      </ContentArea>

      {/* Bottom Actions */}
      <div style={{
        padding: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        backgroundColor: theme.colors.surfaceLight,
        borderTop: `1px solid ${theme.colors.borderLight}`,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
      }}>
        <div style={{
          display: 'flex',
          gap: theme.spacing.sm,
          height: 56,
        }}>
          <Button
            variant="outline"
            fullWidth
            onClick={() => router.push('/home')}
            style={{ flex: 1 }}
          >
            Decline
          </Button>
          <Button
            fullWidth
            iconRight="arrow_forward"
            onClick={() => router.push('/vehicle-details')}
            style={{ flex: 2 }}
          >
            Accept & Continue
          </Button>
        </div>
        <p style={{
          textAlign: 'center',
          fontSize: theme.fontSizes.xs,
          color: theme.colors.textMuted,
          marginTop: theme.spacing.sm,
        }}>
          By accepting, you agree to our Terms of Service
        </p>
      </div>
    </PageContainer>
  );
};

export default ValuationResultScreen;



