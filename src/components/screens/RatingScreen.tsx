'use client'

// Rating Screen - Rate the towing service
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

const RatingScreen: React.FC = () => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
  
  const positiveTags = [
    'Fast Service',
    'Friendly Driver',
    'On Time',
    'Professional',
    'Good Communication',
    'Fair Price',
  ];

  const negativeTags = [
    'Slow Service',
    'Late Arrival',
    'Poor Communication',
    'Unfriendly',
    'Needs Improvement',
  ];

  const tags = rating >= 4 ? positiveTags : rating >= 1 ? negativeTags : [];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    alert('Thank you for your feedback!');
    router.push('/home');
  };

  return (
    <ScreenContainer>
      <Header
        title="Rate Your Experience"
        showBack
        onBack={() => router.back()}
      />

      <ScrollableContent bottomPadding={120}>
        {/* Rating Stars */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing.xl,
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity(theme.colors.primary, 0.1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: theme.spacing.lg,
          }}>
            <Icon name="local_shipping" size={40} color={theme.colors.primary} />
          </div>

          <h2 style={{
            fontSize: theme.fontSizes.xl,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.xs,
          }}>
            How was your towing service?
          </h2>
          <p style={{
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textSecondary,
            textAlign: 'center',
            marginBottom: theme.spacing.xl,
          }}>
            Your feedback helps us improve
          </p>

          {/* Star Rating */}
          <div style={{
            display: 'flex',
            gap: theme.spacing.sm,
            marginBottom: theme.spacing.md,
          }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                style={{
                  padding: theme.spacing.xs,
                  backgroundColor: 'transparent',
                  transition: `transform ${theme.transitions.fast}`,
                  transform: (hoveredRating >= star || rating >= star) ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                <Icon
                  name="star"
                  size={40}
                  filled={hoveredRating >= star || rating >= star}
                  color={(hoveredRating >= star || rating >= star) 
                    ? theme.colors.warning 
                    : theme.colors.gray300}
                />
              </button>
            ))}
          </div>

          {/* Rating Label */}
          {rating > 0 && (
            <span style={{
              fontSize: theme.fontSizes.lg,
              fontWeight: theme.fontWeights.semibold,
              color: rating >= 4 ? theme.colors.successGreen : rating >= 3 ? theme.colors.amber : theme.colors.error,
            }}>
              {ratingLabels[rating]}
            </span>
          )}
        </div>

        {/* Quick Tags */}
        {rating > 0 && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <p style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              marginBottom: theme.spacing.md,
            }}>
              What did you {rating >= 4 ? 'like' : 'experience'}?
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: theme.spacing.sm,
            }}>
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  style={{
                    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                    backgroundColor: selectedTags.includes(tag)
                      ? withOpacity(theme.colors.primary, 0.1)
                      : theme.colors.surfaceLight,
                    borderRadius: theme.borderRadius.full,
                    border: `1px solid ${selectedTags.includes(tag)
                      ? theme.colors.primary
                      : theme.colors.borderLight}`,
                    fontSize: theme.fontSizes.sm,
                    fontWeight: selectedTags.includes(tag)
                      ? theme.fontWeights.semibold
                      : theme.fontWeights.medium,
                    color: selectedTags.includes(tag)
                      ? theme.colors.primary
                      : theme.colors.textSecondary,
                    transition: `all ${theme.transitions.fast}`,
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Feedback Text */}
        {rating > 0 && (
          <div style={{ padding: theme.spacing.md, paddingTop: theme.spacing.md }}>
            <p style={{
              fontSize: theme.fontSizes.sm,
              fontWeight: theme.fontWeights.semibold,
              color: theme.colors.textPrimary,
              marginBottom: theme.spacing.sm,
            }}>
              Additional Comments (Optional)
            </p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us more about your experience..."
              rows={4}
              style={{
                width: '100%',
                padding: theme.spacing.md,
                backgroundColor: theme.colors.surfaceLight,
                borderRadius: theme.borderRadius.lg,
                border: `1px solid ${theme.colors.borderLight}`,
                fontSize: theme.fontSizes.base,
                resize: 'none',
                fontFamily: 'inherit',
              }}
            />
          </div>
        )}

        {/* Tip Card */}
        {rating >= 4 && (
          <div style={{ padding: theme.spacing.md, paddingTop: 0 }}>
            <Card style={{
              backgroundColor: withOpacity(theme.colors.successGreen, 0.05),
              border: `1px solid ${withOpacity(theme.colors.successGreen, 0.2)}`,
            }}>
              <div style={{ display: 'flex', gap: theme.spacing.sm, alignItems: 'center' }}>
                <Icon name="volunteer_activism" size={24} color={theme.colors.successGreen} />
                <div>
                  <p style={{
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.semibold,
                    color: theme.colors.textPrimary,
                  }}>
                    Add a tip for your driver?
                  </p>
                  <p style={{
                    fontSize: theme.fontSizes.xs,
                    color: theme.colors.textSecondary,
                  }}>
                    100% goes to your tow truck driver
                  </p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                gap: theme.spacing.sm,
                marginTop: theme.spacing.md,
              }}>
                {['RM 5', 'RM 10', 'RM 20'].map(tip => (
                  <button
                    key={tip}
                    style={{
                      flex: 1,
                      padding: theme.spacing.sm,
                      backgroundColor: theme.colors.surfaceLight,
                      borderRadius: theme.borderRadius.md,
                      border: `1px solid ${theme.colors.borderLight}`,
                      fontSize: theme.fontSizes.sm,
                      fontWeight: theme.fontWeights.semibold,
                      color: theme.colors.textPrimary,
                    }}
                  >
                    {tip}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        )}
      </ScrollableContent>

      <FixedBottomContainer>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={rating === 0}
          onClick={handleSubmit}
        >
          Submit Rating
        </Button>
      </FixedBottomContainer>
    </ScreenContainer>
  );
};

export default RatingScreen;



