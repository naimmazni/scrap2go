'use client'

// Saved Addresses Screen - Manage pickup locations
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
  FixedBottomContainer,
  SectionTitle,
  ListItem
} from '@/components/ui';

const SavedAddressesScreen: React.FC = () => {
  const router = useRouter();
  const [addresses] = useState([
    {
      id: 1,
      label: 'Home',
      address: 'No 123, Jalan Merdeka, Taman Sentosa, 50000 Kuala Lumpur',
      isDefault: true,
      icon: 'home',
    },
    {
      id: 2,
      label: 'Office',
      address: 'Suite 5-01, Plaza Damansara, Jalan Semantan, 50490 Kuala Lumpur',
      isDefault: false,
      icon: 'business',
    },
  ]);

  const handleAddAddress = () => {
    router.push('/location');
  };

  const handleEditAddress = (addressId) => {
    alert(`Edit address ${addressId}`);
  };

  const handleSetDefault = (addressId) => {
    alert(`Set address ${addressId} as default`);
  };

  const handleDeleteAddress = (addressId) => {
    if (confirm('Are you sure you want to remove this address?')) {
      alert(`Address ${addressId} removed`);
    }
  };

  return (
    <ScreenContainer>
      <Header
        title="Saved Addresses"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={120}>
        {/* Info Card */}
        <div style={{ padding: theme.spacing.md }}>
          <Card style={{
            backgroundColor: withOpacity(theme.colors.primary, 0.05),
            border: `1px solid ${withOpacity(theme.colors.primary, 0.1)}`,
          }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="location_on" size={20} color={theme.colors.primary} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  Quick Pickup Scheduling
                </p>
                <p style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.5,
                }}>
                  Save frequently used addresses for faster towing service booking.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Saved Addresses List */}
        {addresses.length > 0 && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <SectionTitle title="Your Saved Addresses" />
            
            {addresses.map(address => (
              <Card
                key={address.id}
                padding="none"
                style={{ marginBottom: theme.spacing.md }}
              >
                {/* Address Header */}
                <div style={{
                  padding: theme.spacing.md,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: theme.spacing.md,
                  borderBottom: `1px solid ${theme.colors.borderLight}`,
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: theme.borderRadius.xl,
                    backgroundColor: withOpacity(theme.colors.primary, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon name={address.icon} size={24} color={theme.colors.primary} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs, marginBottom: 4 }}>
                      <p style={{
                        fontSize: theme.fontSizes.lg,
                        fontWeight: theme.fontWeights.bold,
                        color: theme.colors.textPrimary,
                      }}>
                        {address.label}
                      </p>
                      {address.isDefault && (
                        <span style={{
                          fontSize: theme.fontSizes.xs,
                          fontWeight: theme.fontWeights.semibold,
                          color: theme.colors.primary,
                          backgroundColor: withOpacity(theme.colors.primary, 0.1),
                          padding: `2px ${theme.spacing.xs}`,
                          borderRadius: theme.borderRadius.sm,
                        }}>
                          Default
                        </span>
                      )}
                    </div>
                    <p style={{
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.textSecondary,
                      lineHeight: 1.5,
                    }}>
                      {address.address}
                    </p>
                  </div>
                </div>

                {/* Address Actions */}
                <div>
                  <ListItem
                    icon="directions"
                    label="View on Map"
                    onClick={() => router.push('/location')}
                    showBorder
                  />
                  <ListItem
                    icon="edit"
                    label="Edit Address"
                    onClick={() => handleEditAddress(address.id)}
                    showBorder
                  />
                  {!address.isDefault && (
                    <ListItem
                      icon="star"
                      label="Set as Default"
                      onClick={() => handleSetDefault(address.id)}
                      showBorder
                    />
                  )}
                  <ListItem
                    icon="delete"
                    label="Remove Address"
                    onClick={() => handleDeleteAddress(address.id)}
                  />
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {addresses.length === 0 && (
          <div style={{ padding: theme.spacing.xl }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              <Icon name="location_on" size={64} color={theme.colors.textMuted} />
              <p style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.semibold,
                color: theme.colors.textPrimary,
                marginTop: theme.spacing.md,
              }}>
                No Saved Addresses
              </p>
              <p style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
                marginTop: theme.spacing.xs,
                maxWidth: 240,
              }}>
                Add locations for quick access when scheduling pickups
              </p>
            </div>
          </div>
        )}

        {/* Tips Card */}
        <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
          <Card style={{ backgroundColor: theme.colors.gray50 }}>
            <div style={{ display: 'flex', gap: theme.spacing.sm }}>
              <Icon name="tips_and_updates" size={20} color={theme.colors.primary} />
              <div>
                <p style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: theme.fontWeights.semibold,
                  color: theme.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  Tips for Pickup Locations
                </p>
                <ul style={{
                  fontSize: theme.fontSizes.xs,
                  color: theme.colors.textSecondary,
                  lineHeight: 1.6,
                  paddingLeft: 20,
                  margin: 0,
                }}>
                  <li>Ensure the location is accessible for tow trucks</li>
                  <li>Provide landmarks for easier navigation</li>
                  <li>Save multiple addresses for convenience</li>
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
          onClick={handleAddAddress}
          icon="add_location"
        >
          Add New Address
        </Button>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default SavedAddressesScreen;



