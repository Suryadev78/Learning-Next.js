export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>This is Layout for Authentication</div>
      {children}
    </div>
  );
}
