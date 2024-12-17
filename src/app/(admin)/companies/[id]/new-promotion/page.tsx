'use client';

import React, { use } from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: Promise<{ id: string }>; // params тепер є Promise
}

export default function Page({ params }: PageProps) {
  // Розгортаємо params за допомогою React.use()
  const { id } = use(params);

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
}
