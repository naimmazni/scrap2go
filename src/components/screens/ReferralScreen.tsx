'use client'

// Referral Screen - Invite friends and earn rewards
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  Header,
  ScreenContainer,
  ScrollableContent,
  FixedBottomContainer
} from '@/components/ui';

const ReferralScreen: React.FC = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const referralCode = 'SCRAP2GO-ABC123';
  const referralLink = `https://scrap2go.vercel.app/ref/${referralCode}`;
  
  // Mock data
  const stats = {
    totalReferrals: 12,
    successfulReferrals: 8,
    pendingReferrals: 4,
    totalEarnings: 'RM 400',
  };

  const recentReferrals = [
    {
      id: 1,
      name: 'Ahmad B.',
      status: 'completed',
      reward: 'RM 50',
      date: '15 Jan 2024',
    },
    {
      id: 2,
      name: 'Siti M.',
      status: 'pending',
      reward: 'RM 50',
      date: '12 Jan 2024',
    },
    {
      id: 3,
      name: 'Kumar R.',
      status: 'completed',
      reward: 'RM 50',
      date: '08 Jan 2024',
    },
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const message = `Join Scrap2Go and get instant cash for your scrap vehicle! Use my referral code: ${referralCode}`;
    
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message + ' ' + referralLink)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(referralLink)}`,
      email: `mailto:?subject=${encodeURIComponent('Join Scrap2Go')}&body=${encodeURIComponent(message + '\n\n' + referralLink)}`,
    };

    window.open(urls[platform], '_blank');
  };

  return (
    <ScreenContainer>
      <Header
        title="Refer & Earn"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={100}>
        {/* Hero Card */}
        <div style={{ padding: theme.spacing.md }}>
          <Card style={{
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary}dd 100%)`,
            color: theme.colors.textLight,
            textAlign: 'center',
            padding: theme.spacing.xl,
          }}>
            <div style={{
              width: 80,
              height: 80,
              borderRadius: theme.borderRadius.full,
              backgroundColor: withOpacity(theme.colors.textLight, 0.2),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              marginBottom: theme.spacing.md,
            }}>
              <Icon name="card_giftcard" size={40} color={theme.colors.textLight} />
            </div>
            <h2 style={{
              fontSize: theme.fontSizes['2xl'],
              fontWeight: theme.fontWeights.bold,
              marginBottom: theme.spacing.sm,
            }}>
              Earn RM 50 per Friend!
            </h2>
            <p style={{
              fontSize: theme.fontSizes.sm,
              opacity: 0.9,
              lineHeight: 1.5,
            }}>
              Invite your friends to Scrap2Go. You both get RM 50 when they complete their first vehicle disposal!
            </p>
          </Card>
        </div>

        {/* Stats Grid */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing.sm,
          }}>
            {[
              { label: 'Total Referrals', value: stats.totalReferrals, icon: 'people' },
              { label: 'Successful', value: stats.successfulReferrals, icon: 'check_circle' },
              { label: 'Pending', value: stats.pendingReferrals, icon: 'schedule' },
              { label: 'Total Earned', value: stats.totalEarnings, icon: 'payments' },
            ].map((stat, index) => (
              <Card key={index} style={{ textAlign: 'center' }}>
                <Icon name={stat.icon} size={24} color={theme.colors.primary} />
                <p style={{
                  fontSize: theme.fontSizes['2xl'],
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textPrimary,
                  marginTop: theme.spacing.xs,
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  marginTop: 2,
                }}>
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Referral Code */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.sm,
          }}>
            Your Referral Code
          </p>
          <Card style={{
            padding: theme.spacing.md,
            backgroundColor: theme.colors.gray50,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  marginBottom: 4,
                }}>
                  Share this code
                </p>
                <p style={{
                  fontSize: theme.fontSizes.lg,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.primary,
                  fontFamily: 'monospace',
                }}>
                  {referralCode}
                </p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                icon={copied ? 'check' : 'content_copy'}
                onClick={handleCopyCode}
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </Card>
        </div>

        {/* Referral Link */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.sm,
          }}>
            Or Share This Link
          </p>
          <Card style={{
            padding: theme.spacing.md,
            backgroundColor: theme.colors.gray50,
          }}>
            <div style={{
              display: 'flex',
              gap: theme.spacing.sm,
              alignItems: 'center',
              marginBottom: theme.spacing.sm,
            }}>
              <Icon name="link" size={18} color={theme.colors.textSecondary} />
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
              }}>
                {referralLink}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={copied ? 'check' : 'content_copy'}
              onClick={handleCopyLink}
              fullWidth
            >
              {copied ? 'Link Copied!' : 'Copy Link'}
            </Button>
          </Card>
        </div>

        {/* Share Buttons */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.sm,
          }}>
            Share Via
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: theme.spacing.sm,
          }}>
            {[
              { name: 'WhatsApp', icon: 'chat', color: '#25D366', platform: 'whatsapp' },
              { name: 'Facebook', icon: 'groups', color: '#1877F2', platform: 'facebook' },
              { name: 'Twitter', icon: 'alternate_email', color: '#1DA1F2', platform: 'twitter' },
              { name: 'Email', icon: 'mail', color: '#EA4335', platform: 'email' },
            ].map((social) => (
              <button
                key={social.name}
                onClick={() => handleShare(social.platform)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: theme.spacing.xs,
                  padding: theme.spacing.sm,
                  backgroundColor: theme.colors.surfaceLight,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${theme.colors.borderLight}`,
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: theme.borderRadius.full,
                  backgroundColor: withOpacity(social.color, 0.1),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon name={social.icon} size={24} color={social.color} />
                </div>
                <span style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                }}>
                  {social.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.sm,
          }}>
            How It Works
          </p>
          <Card>
            {[
              { step: '1', icon: 'share', title: 'Share Your Code', desc: 'Send your unique referral code to friends' },
              { step: '2', icon: 'person_add', title: 'Friend Signs Up', desc: 'They register using your code' },
              { step: '3', icon: 'local_shipping', title: 'Complete First Order', desc: 'They successfully dispose their first vehicle' },
              { step: '4', icon: 'payments', title: 'Both Earn RM 50', desc: 'Reward credited to both accounts' },
            ].map((item, index) => (
              <div key={index}>
                <div style={{
                  display: 'flex',
                  gap: theme.spacing.md,
                  padding: theme.spacing.sm,
                  paddingLeft: 0,
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: theme.borderRadius.full,
                    backgroundColor: withOpacity(theme.colors.primary, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon name={item.icon} size={20} color={theme.colors.primary} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: theme.spacing.xs,
                      marginBottom: 4,
                    }}>
                      <span style={{
                        width: 20,
                        height: 20,
                        borderRadius: theme.borderRadius.full,
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.textLight,
                        fontSize: theme.fontSizes.xs,
                        fontWeight: theme.fontWeights.bold,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {item.step}
                      </span>
                      <p style={{
                        fontSize: theme.fontSizes.sm,
                        fontWeight: theme.fontWeights.semibold,
                        color: theme.colors.textPrimary,
                      }}>
                        {item.title}
                      </p>
                    </div>
                    <p style={{
                      fontSize: theme.fontSizes.xs,
                      color: theme.colors.textSecondary,
                      lineHeight: 1.5,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
                {index < 3 && (
                  <div style={{
                    width: 1,
                    height: 20,
                    backgroundColor: theme.colors.borderLight,
                    marginLeft: 20,
                    marginTop: 4,
                    marginBottom: 4,
                  }} />
                )}
              </div>
            ))}
          </Card>
        </div>

        {/* Recent Referrals */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <p style={{
            fontSize: theme.fontSizes.sm,
            fontWeight: theme.fontWeights.semibold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.sm,
          }}>
            Recent Referrals
          </p>
          <Card>
            {recentReferrals.map((referral, index) => (
              <div key={referral.id}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: theme.spacing.sm,
                  paddingLeft: 0,
                  paddingRight: 0,
                }}>
                  <div>
                    <p style={{
                      fontSize: theme.fontSizes.sm,
                      fontWeight: theme.fontWeights.semibold,
                      color: theme.colors.textPrimary,
                      marginBottom: 2,
                    }}>
                      {referral.name}
                    </p>
                    <p style={{
                      fontSize: theme.fontSizes.xs,
                      color: theme.colors.textSecondary,
                    }}>
                      {referral.date}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing.sm,
                  }}>
                    <span style={{
                      fontSize: theme.fontSizes.sm,
                      fontWeight: theme.fontWeights.semibold,
                      color: referral.status === 'completed' ? theme.colors.successGreen : theme.colors.amber,
                    }}>
                      {referral.reward}
                    </span>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: theme.borderRadius.md,
                      fontSize: theme.fontSizes.xs,
                      fontWeight: theme.fontWeights.medium,
                      backgroundColor: referral.status === 'completed'
                        ? withOpacity(theme.colors.successGreen, 0.1)
                        : withOpacity(theme.colors.amber, 0.1),
                      color: referral.status === 'completed' ? theme.colors.successGreen : theme.colors.amber,
                    }}>
                      {referral.status === 'completed' ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>
                {index < recentReferrals.length - 1 && (
                  <div style={{
                    height: 1,
                    backgroundColor: theme.colors.borderLight,
                    margin: `${theme.spacing.sm} 0`,
                  }} />
                )}
              </div>
            ))}
          </Card>
        </div>

        {/* Terms */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card style={{ backgroundColor: theme.colors.gray50 }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="info" size={18} color={theme.colors.textSecondary} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                  marginBottom: theme.spacing.xs,
                }}>
                  <strong>Terms & Conditions:</strong>
                </p>
                <ul style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.6,
                  paddingLeft: 20,
                }}>
                  <li>Rewards credited within 7 days of successful referral</li>
                  <li>Referred friend must complete their first vehicle disposal</li>
                  <li>Maximum of 10 referrals per month</li>
                  <li>Referral program subject to change without notice</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </ScrollableContent>

      <FixedBottomContainer>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          icon="share"
          onClick={() => handleShare('whatsapp')}
        >
          Invite Friends Now
        </Button>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default ReferralScreen;



