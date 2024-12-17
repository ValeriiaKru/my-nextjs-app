'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>; // params є Promise
}

export default async function Page({ params }: PageProps) {
  const router = useRouter();

  // Розгортаємо params
  const { id } = await params;

  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
