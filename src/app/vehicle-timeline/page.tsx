import React, { Suspense } from 'react';
import AppLayout from '@/components/AppLayout';
import VehicleOrderTimelineScreen from '@/components/screens/VehicleOrderTimelineScreen';

export default function VehicleTimelinePage() {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <VehicleOrderTimelineScreen />
      </Suspense>
    </AppLayout>
  );
}
