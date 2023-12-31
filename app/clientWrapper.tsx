'use client';
import useDynamicHeightAdjustment from './DynamicHeightAdjustment';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  useDynamicHeightAdjustment();
  return <>{children}</>;
};

export default ClientWrapper;
