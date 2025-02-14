export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Ошибка доступа</h1>
        <p className="text-gray-700">
          Для доступа к форме используйте персональную ссылку, которую вы
          получили в приглашении.
        </p>
      </div>
    </div>
  );
}
