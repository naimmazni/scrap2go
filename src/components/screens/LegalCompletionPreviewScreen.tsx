'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Button, PageContainer, PageHeader } from '@/components/ui';

const LegalCompletionPreviewScreen: React.FC = () => {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadDocument = () => {
    setIsDownloading(true);
    // Simulate PDF download
    setTimeout(() => {
      setIsDownloading(false);
      console.log('Ownership Transfer Certification downloaded');
      // In real implementation, trigger actual PDF download
    }, 1500);
  };

  return (
    <PageContainer>
      <PageHeader
        title="Legal Completion"
        showBack
        onBack={() => router.back()}
      />

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: `${theme.spacing.lg}`,
        gap: theme.spacing.lg,
        overflowY: 'auto',
        paddingBottom: 120,
      }}>
        
        {/* Document Preview Card */}
        <div style={{
          borderRadius: theme.borderRadius.xl,
          backgroundColor: theme.colors.surfaceLight,
          overflow: 'visible',
          boxShadow: theme.shadows.card,
          border: `1px solid ${theme.colors.borderLight}`,
        }}>
          {/* Document Header */}
          <div style={{
            padding: theme.spacing.lg,
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
            borderBottom: `1px solid ${theme.colors.borderLight}`,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.md,
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: theme.borderRadius.lg,
              backgroundColor: theme.colors.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon name="description" size={28} color="#fff" />
            </div>
            <div>
              <h3 style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textPrimary,
                margin: 0,
              }}>
                Ownership Transfer Certification
              </h3>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                margin: 0,
                marginTop: 4,
              }}>
                Legal Completion Document
              </p>
            </div>
          </div>

          {/* Document Preview Area - Make this section scrollable and visible */}
          <div style={{
            padding: theme.spacing.lg,
            backgroundColor: theme.colors.backgroundLight,
            minHeight: 500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: theme.spacing.xl,
            overflow: 'visible',
          }}>
            {/* PDF Document Placeholder */}
            <div style={{
              width: 200,
              height: 280,
              backgroundColor: '#fff',
              borderRadius: theme.borderRadius.lg,
              border: `2px solid ${theme.colors.borderLight}`,
              display: 'flex',
              flexDirection: 'column',
              padding: theme.spacing.md,
              gap: theme.spacing.sm,
              boxShadow: `0 4px 12px ${withOpacity(theme.colors.primary, 0.1)}`,
              marginTop: theme.spacing.lg,
            }}>
              {/* PDF Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                paddingBottom: theme.spacing.sm,
                borderBottom: `1px solid ${theme.colors.borderLight}`,
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: theme.borderRadius.md,
                  backgroundColor: '#E53935',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                  PDF
                </div>
                <div style={{
                  flex: 1,
                  minWidth: 0,
                }}>
                  <p style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: theme.colors.textPrimary,
                    margin: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                    Certificate
                  </p>
                  <p style={{
                    fontSize: 8,
                    color: theme.colors.textSecondary,
                    margin: 0,
                  }}>
                    PDF Document
                  </p>
                </div>
              </div>

              {/* PDF Content Lines */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}>
                <div style={{
                  height: 8,
                  backgroundColor: theme.colors.gray200,
                  borderRadius: 4,
                  width: '80%',
                }} />
                <div style={{
                  height: 8,
                  backgroundColor: theme.colors.gray200,
                  borderRadius: 4,
                  width: '100%',
                }} />
                <div style={{
                  height: 8,
                  backgroundColor: theme.colors.gray200,
                  borderRadius: 4,
                  width: '90%',
                }} />
                <div style={{
                  height: 8,
                  backgroundColor: theme.colors.gray200,
                  borderRadius: 4,
                  width: '70%',
                  marginTop: 'auto',
                }} />
              </div>

              {/* PDF Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                paddingTop: theme.spacing.sm,
                borderTop: `1px solid ${theme.colors.borderLight}`,
              }}>
                <Icon name="picture_as_pdf" size={16} color="#E53935" />
                <span style={{
                  fontSize: 9,
                  color: theme.colors.textSecondary,
                }}>
                  1 page
                </span>
              </div>
            </div>

            <p style={{
              fontSize: theme.fontSizes.base,
              color: theme.colors.textSecondary,
              textAlign: 'center',
              margin: 0,
            }}>
              PDF Preview Ready
            </p>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textMuted,
              textAlign: 'center',
              margin: 0,
            }}>
              Ownership Transfer Certification Document
            </p>
          </div>

          {/* Document Info */}
          <div style={{
            padding: theme.spacing.lg,
            borderTop: `1px solid ${theme.colors.borderLight}`,
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
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
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  margin: 0,
                  marginBottom: 4,
                }}>
                  Document Type
                </p>
                <p style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  margin: 0,
                }}>
                  Ownership Transfer Certification
                </p>
              </div>
            </div>

            <div style={{
              height: 1,
              backgroundColor: theme.colors.borderLight,
            }} />

            <div>
              <p style={{
                fontSize: theme.fontSizes.xs,
                color: theme.colors.textSecondary,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                margin: 0,
                marginBottom: 4,
              }}>
                Status
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.colors.success,
                }} />
                <span style={{
                  fontSize: theme.fontSizes.base,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.success,
                }}>
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div style={{
          padding: theme.spacing.lg,
          borderRadius: theme.borderRadius.lg,
          backgroundColor: withOpacity(theme.colors.primary, 0.05),
          border: `1px solid ${withOpacity(theme.colors.primary, 0.2)}`,
          display: 'flex',
          gap: theme.spacing.md,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 24,
            color: theme.colors.primary,
          }}>
            <Icon name="info" size={24} />
          </div>
          <div>
            <p style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              margin: 0,
              marginBottom: 6,
            }}>
              Keep this document safe
            </p>
            <p style={{
              fontSize: theme.fontSizes.sm,
              color: theme.colors.textSecondary,
              lineHeight: 1.5,
              margin: 0,
            }}>
              This Ownership Transfer Certification proves the legal completion of the vehicle transfer. Keep a copy for your records and any future reference.
            </p>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Actions */}
      <div style={{
        position: 'sticky',
        bottom: 0,
        backgroundColor: theme.colors.backgroundLight,
        borderTop: `1px solid ${theme.colors.borderLight}`,
        padding: theme.spacing.lg,
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.sm,
      }}>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          icon="download"
          onClick={handleDownloadDocument}
          disabled={isDownloading}
          style={{
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing.sm,
          }}
        >
          {isDownloading ? 'Downloading...' : 'Download Certificate'}
        </Button>
        <Button
          variant="outline"
          size="lg"
          fullWidth
          onClick={() => router.back()}
          style={{
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Back
        </Button>
      </div>
    </PageContainer>
  );
};

export default LegalCompletionPreviewScreen;
