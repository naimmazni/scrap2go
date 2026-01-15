'use client'

// Identity Verification Screen - Upload MyKad and Vehicle Grant for legal deregistration
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme } from '@/lib/theme';
import { 
  Button, 
  Header, 
  ScreenContainer,
  ScrollableContent,
  FixedBottomContainer,
  SectionTitle,
  StepIndicator,
  UploadCard,
  SecurityNotice
} from '@/components/ui';

const IdentityVerificationScreen: React.FC = () => {
  const router = useRouter();
  const [myKadFrontUploaded, setMyKadFrontUploaded] = useState(false);
  const [myKadBackUploaded, setMyKadBackUploaded] = useState(false);
  const [vocUploaded, setVocUploaded] = useState(false);
  const [numberPlateUploaded, setNumberPlateUploaded] = useState(false);
  const [drivingLicenseUploaded, setDrivingLicenseUploaded] = useState(false);

  const handleSubmit = () => {
    if (myKadFrontUploaded && myKadBackUploaded && vocUploaded && numberPlateUploaded) {
      router.push('/jpj-success');
    }
  };

  const canSubmit = myKadFrontUploaded && myKadBackUploaded && vocUploaded && numberPlateUploaded;

  return (
    <ScreenContainer>
      <Header
        title="Identity Verification"
        showBack
        onBack={() => router.back()}
      />

      <StepIndicator steps={4} currentStep={1} />

      <ScrollableContent bottomPadding={100}>
        <SectionTitle
          title="Verify Your Identity"
          subtitle="To ensure legal deregistration and protect your ownership rights, please upload clear photos of your documents."
        />

        <UploadCard
          title="MyKad - Front (Identity Card)"
          description="Ensure your name and IC number are clearly visible."
          icon="id_card"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDeDUcyTcjJxKP3QVshGIf7Oc_NLvjoZUY5cK70ZP5_CqAzDWDVkB7AkCATop-ayc5Tg9HsLWsGyJ58q-hJGWBrbHX1X7D6MLWxch1OsrDQdRbqDxSVoUr3-3RG7PHFrz3IFSFxRGrO5My79YgmxJyvLAbEHzofpwi0hdQ53i8JmsbVTPVQ_d6tK5kfEt2jdl9aju_Gi2DiZ-6XsnlBzk1YMnOmpC5DTjY9tmcq3uFz1-WO_Ap707agr5nKff_2ZhXitsCubNRODjZ0"
          imageHint="Example: Clear text & photo"
          uploaded={myKadFrontUploaded}
          warning="Avoid glare or shadows covering the text."
          buttonText="Upload MyKad Front"
          onUpload={() => setMyKadFrontUploaded(true)}
          style={{ marginBottom: theme.spacing.lg }}
        />

        <UploadCard
          title="MyKad - Back (Identity Card)"
          description="Upload the back side with address details."
          icon="id_card"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDeDUcyTcjJxKP3QVshGIf7Oc_NLvjoZUY5cK70ZP5_CqAzDWDVkB7AkCATop-ayc5Tg9HsLWsGyJ58q-hJGWBrbHX1X7D6MLWxch1OsrDQdRbqDxSVoUr3-3RG7PHFrz3IFSFxRGrO5My79YgmxJyvLAbEHzofpwi0hdQ53i8JmsbVTPVQ_d6tK5kfEt2jdl9aju_Gi2DiZ-6XsnlBzk1YMnOmpC5DTjY9tmcq3uFz1-WO_Ap707agr5nKff_2ZhXitsCubNRODjZ0"
          imageHint="Example: Back side with address"
          uploaded={myKadBackUploaded}
          buttonText="Upload MyKad Back"
          onUpload={() => setMyKadBackUploaded(true)}
          style={{ marginBottom: theme.spacing.lg }}
        />

        <UploadCard
          title="Vehicle Grant (VOC)"
          description="Upload the original Vehicle Ownership Certificate front page."
          icon="description"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDpM1w82SK7Va03tXbgXhHbF84MYZZbtUivj155xhFIhftU6QiL_O60LclEuWBP_AVihpX2gjmD6F2lY64X8h8ws4h5NMd1R21C_CVgzhWn_vP_AeTQUVMIzh8mW5tLU2ko_lbmYPhT6Cj_ZS-yjeEb5xzLjwOLu__BzMwUOZYJOYKRgP44MvME7iPwHrOnuKtnB2KISfS7f1AxUnPyXY3Jn9FCpvUdLzRdvh2-M6u_GsM2-hWfYY9UrSU6hQQFnjMOKQ4EfgLEwkqA"
          imageHint="Example: Front page only"
          uploaded={vocUploaded}
          buttonText="Upload VOC"
          buttonVariant="secondary"
          onUpload={() => setVocUploaded(true)}
          style={{ marginBottom: theme.spacing.lg }}
        />

        <UploadCard
          title="Vehicle Number Plate"
          description="Clear photo of your vehicle's registration number plate."
          icon="pin"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAesUFmzjMMr0LU5hKyzB0EcJeBpr1MyLs3iZF18wHNH1l2PzVEnS1DFSTb4wQVMExWgLf4ADzRRJFlo4SXyDu6nA_aPBvWba5L5PRlUOjUy7iJOpHlmTYFWwwzyfS8U_7GFvOQOn4SXfyzQGqdhfGXT1c_gAiu5M5AdLSkA254ZtmXEphFvOOrlxiov9HnhAsh_4KnZ0K2CiNQcLxv4WOS8A4WCvksVK3_a71mBbqjjzLbOoMsc6-VkFawn4PZ1OBhNc-xQHVABbaA"
          imageHint="Example: Clear plate number"
          uploaded={numberPlateUploaded}
          buttonText="Upload Number Plate"
          onUpload={() => setNumberPlateUploaded(true)}
          style={{ marginBottom: theme.spacing.lg }}
        />

        <UploadCard
          title="Driving License (Optional)"
          description="Upload your driving license if available for additional verification."
          icon="credit_card"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDeDUcyTcjJxKP3QVshGIf7Oc_NLvjoZUY5cK70ZP5_CqAzDWDVkB7AkCATop-ayc5Tg9HsLWsGyJ58q-hJGWBrbHX1X7D6MLWxch1OsrDQdRbqDxSVoUr3-3RG7PHFrz3IFSFxRGrO5My79YgmxJyvLAbEHzofpwi0hdQ53i8JmsbVTPVQ_d6tK5kfEt2jdl9aju_Gi2DiZ-6XsnlBzk1YMnOmpC5DTjY9tmcq3uFz1-WO_Ap707agr5nKff_2ZhXitsCubNRODjZ0"
          imageHint="Optional: Driving license"
          uploaded={drivingLicenseUploaded}
          buttonText="Upload License (Optional)"
          buttonVariant="outline"
          onUpload={() => setDrivingLicenseUploaded(true)}
          style={{ marginBottom: theme.spacing.lg }}
        />

        <SecurityNotice />
        
        {/* View Documents Link */}
        {(myKadFrontUploaded || myKadBackUploaded || vocUploaded || numberPlateUploaded || drivingLicenseUploaded) && (
          <div style={{ padding: `0 ${theme.spacing.md}` }}>
            <button
              onClick={() => router.push('/document-preview')}
              style={{
                width: '100%',
                padding: theme.spacing.md,
                backgroundColor: 'transparent',
                color: theme.colors.primary,
                fontSize: theme.fontSizes.sm,
                fontWeight: theme.fontWeights.semibold,
                textAlign: 'center',
                textDecoration: 'underline',
              }}
            >
              View Uploaded Documents
            </button>
          </div>
        )}
      </ScrollableContent>

      <FixedBottomContainer>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!canSubmit}
          onClick={handleSubmit}
          style={{
            opacity: canSubmit ? 1 : 0.5,
            backgroundColor: canSubmit ? theme.colors.primary : theme.colors.gray300,
            boxShadow: canSubmit ? theme.shadows.primary : 'none',
          }}
        >
          Submit for Verification
        </Button>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default IdentityVerificationScreen;



