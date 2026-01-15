'use client'

// Vehicle Details Screen - Enter vehicle registration, make/model, year
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { 
  Icon, 
  Button, 
  Card, 
  PageHeader, 
  Input,
  PageContainer,
  ContentArea,
  SectionTitle,
  StepIndicator
} from '@/components/ui';

const VehicleDetailsScreen: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    plateNumber: '',
    make: '',
    model: '',
    year: '',
    engineNumber: '',
    chassisNumber: '',
  });

  const carMakes = ['Proton', 'Perodua', 'Honda', 'Toyota', 'Nissan', 'Mazda', 'BMW', 'Mercedes', 'Other'];
  const years = Array.from({ length: 30 }, (_, i) => (2024 - i).toString());

  const isFormValid = formData.plateNumber && formData.make && formData.model && formData.year;

  const handleContinue = () => {
    if (isFormValid) {
      router.push('/identity-verification');
    }
  };

  return (
    <PageContainer>
      <PageHeader
        title="Vehicle Details"
        showBack
        onBack={() => router.back()}
      />

      <StepIndicator currentStep={1} steps={4} />

      <ContentArea>
        {/* Vehicle Plate Hero */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing.lg,
          paddingBottom: theme.spacing.md,
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: theme.borderRadius.xl,
            backgroundColor: withOpacity(theme.colors.primary, 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: theme.spacing.md,
          }}>
            <Icon name="directions_car" size={40} color={theme.colors.primary} />
          </div>
          <p style={{
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textSecondary,
            textAlign: 'center',
            maxWidth: 280,
          }}>
            Enter your vehicle details for accurate valuation and JPJ deregistration
          </p>
        </div>

        {/* Form Section */}
        <div style={{ padding: theme.spacing.md }}>
          <SectionTitle title="Registration Info" />
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
          }}>
            {/* Plate Number */}
            <div>
              <label style={{
                display: 'block',
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
                marginBottom: theme.spacing.sm,
              }}>
                Vehicle Plate Number *
              </label>
              <input
                value={formData.plateNumber}
                onChange={(e) => setFormData({ ...formData, plateNumber: e.target.value.toUpperCase() })}
                placeholder="e.g. WXX 1234"
                style={{
                  width: '100%',
                  height: 56,
                  padding: `0 ${theme.spacing.md}`,
                  backgroundColor: theme.colors.surfaceLight,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${theme.colors.borderLight}`,
                  fontSize: theme.fontSizes.xl,
                  fontWeight: theme.fontWeights.bold,
                  textAlign: 'center',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}
              />
            </div>

            {/* Make */}
            <div>
              <label style={{
                display: 'block',
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
                marginBottom: theme.spacing.sm,
              }}>
                Make *
              </label>
              <select
                value={formData.make}
                onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                style={{
                  width: '100%',
                  height: 56,
                  padding: `0 ${theme.spacing.md}`,
                  backgroundColor: theme.colors.surfaceLight,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${theme.colors.borderLight}`,
                  fontSize: theme.fontSizes.base,
                  color: formData.make ? theme.colors.textPrimary : theme.colors.textMuted,
                }}
              >
                <option value="">Select make</option>
                {carMakes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            {/* Model */}
            <Input
              label="Model *"
              value={formData.model}
              onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              placeholder="e.g. Saga, Myvi, City"
            />

            {/* Year */}
            <div>
              <label style={{
                display: 'block',
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
                marginBottom: theme.spacing.sm,
              }}>
                Year *
              </label>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                style={{
                  width: '100%',
                  height: 56,
                  padding: `0 ${theme.spacing.md}`,
                  backgroundColor: theme.colors.surfaceLight,
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${theme.colors.borderLight}`,
                  fontSize: theme.fontSizes.base,
                  color: formData.year ? theme.colors.textPrimary : theme.colors.textMuted,
                }}
              >
                <option value="">Select year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Optional Details */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <SectionTitle 
            title="Additional Details" 
            subtitle="Optional - helps with faster processing"
          />
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
          }}>
            <Input
              label="Engine Number"
              value={formData.engineNumber}
              onChange={(e) => setFormData({ ...formData, engineNumber: e.target.value.toUpperCase() })}
              placeholder="Found on engine block"
            />
            <Input
              label="Chassis Number"
              value={formData.chassisNumber}
              onChange={(e) => setFormData({ ...formData, chassisNumber: e.target.value.toUpperCase() })}
              placeholder="Found on door frame"
            />
          </div>
        </div>

        {/* Info Card */}
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
                  Why do we need this?
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  Vehicle details are required for JPJ deregistration and to provide you with an accurate scrap value.
                </p>
              </div>
            </div>
          </Card>
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
          disabled={!isFormValid}
          onClick={handleContinue}
          iconRight="arrow_forward"
        >
          Continue to Verification
        </Button>
      </div>
    </PageContainer>
  );
};

export default VehicleDetailsScreen;



