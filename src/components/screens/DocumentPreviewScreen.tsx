'use client'

// Document Preview Screen - View uploaded documents (MyKad, VOC) before submission
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  PageHeader,
  PageContainer,
  ContentArea,
  WarningBox
} from '@/components/ui';

const DocumentPreviewScreen: React.FC = () => {
  const router = useRouter();
  const [selectedDocument, setSelectedDocument] = useState('mykad');

  const documents = [
    {
      id: 'mykad',
      name: 'MyKad (Front)',
      type: 'Identity Card',
      uploadedAt: '24 Oct 2024, 2:30 PM',
      size: '2.4 MB',
      status: 'verified',
    },
    {
      id: 'voc',
      name: 'Vehicle Ownership Certificate',
      type: 'VOC Document',
      uploadedAt: '24 Oct 2024, 2:32 PM',
      size: '3.1 MB',
      status: 'verified',
    },
  ];

  const currentDoc = documents.find(d => d.id === selectedDocument);

  return (
    <PageContainer>
      <PageHeader
        title="Document Preview"
        showBack
        onBack={() => router.back()}
      />

      <ContentArea>
        {/* Document Tabs */}
        <div style={{
          display: 'flex',
          gap: theme.spacing.sm,
          padding: theme.spacing.md,
          paddingBottom: 0,
        }}>
          {documents.map(doc => (
            <button
              key={doc.id}
              onClick={() => setSelectedDocument(doc.id)}
              style={{
                flex: 1,
                padding: theme.spacing.md,
                backgroundColor: selectedDocument === doc.id
                  ? theme.colors.surfaceLight
                  : 'transparent',
                borderRadius: theme.borderRadius.lg,
                border: `1px solid ${selectedDocument === doc.id
                  ? theme.colors.primary
                  : theme.colors.borderLight}`,
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: selectedDocument === doc.id
                  ? theme.colors.primary
                  : theme.colors.textSecondary,
                transition: `all ${theme.transitions.fast}`,
              }}
            >
              {doc.name}
            </button>
          ))}
        </div>

        {/* Document Info */}
        <div style={{ padding: theme.spacing.md }}>
          <Card>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: theme.spacing.md,
            }}>
              <div>
                <h3 style={{
                  fontSize: theme.fontSizes.lg,
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  {currentDoc.name}
                </h3>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  color: theme.colors.textSecondary,
                }}>
                  {currentDoc.type}
                </p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.xs,
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                backgroundColor: withOpacity('#10B981', 0.1),
                borderRadius: theme.borderRadius.full,
              }}>
                <Icon name="check_circle" size={14} color="#10B981" filled />
                <span style={{
                  fontSize: theme.fontSizes.xs,
                  fontWeight: theme.fontWeights.semibold,
                  color: '#10B981',
                  textTransform: 'capitalize',
                }}>
                  {currentDoc.status}
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing.sm,
              fontSize: theme.fontSizes.sm,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: theme.colors.textSecondary }}>Uploaded</span>
                <span style={{ fontWeight: theme.fontWeights.medium }}>
                  {currentDoc.uploadedAt}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: theme.colors.textSecondary }}>File Size</span>
                <span style={{ fontWeight: theme.fontWeights.medium }}>
                  {currentDoc.size}
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Document Image Preview */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card
            padding="sm"
            style={{
              backgroundColor: theme.colors.gray100,
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Placeholder for actual document image */}
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing.md,
            }}>
              <Icon name="description" size={64} color={theme.colors.textMuted} />
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textMuted,
              }}>
                Document preview
              </p>
            </div>

            {/* Zoom Controls */}
            <div style={{
              position: 'absolute',
              bottom: theme.spacing.md,
              right: theme.spacing.md,
              display: 'flex',
              gap: theme.spacing.xs,
              backgroundColor: withOpacity('#000', 0.6),
              borderRadius: theme.borderRadius.full,
              padding: theme.spacing.xs,
            }}>
              <button style={{
                width: 32,
                height: 32,
                borderRadius: theme.borderRadius.full,
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="zoom_in" size={20} color="#fff" />
              </button>
              <button style={{
                width: 32,
                height: 32,
                borderRadius: theme.borderRadius.full,
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="zoom_out" size={20} color="#fff" />
              </button>
            </div>
          </Card>
        </div>

        {/* Warning if needed */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <WarningBox 
            variant="info"
            message="Make sure all text is clearly visible and the photo is not blurry"
          />
        </div>

        {/* Action Buttons */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: theme.spacing.sm,
          }}>
            <Button
              variant="outline"
              icon="delete"
              onClick={() => alert('Document removed')}
            >
              Remove
            </Button>
            <Button
              variant="outline"
              icon="edit"
              onClick={() => alert('Replace document')}
            >
              Replace
            </Button>
          </div>
        </div>
      </ContentArea>

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
          onClick={() => router.back()}
        >
          Looks Good
        </Button>
      </div>
    </PageContainer>
  );
};

export default DocumentPreviewScreen;



