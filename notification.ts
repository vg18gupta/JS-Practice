// notificationStore.ts
type NotificationType = 'success' | 'error' | 'info';

interface Toast {
	id: string;
	message: string;
	type: NotificationType;
}

type Listener = (toasts: Toast[]) => void;

class NotificationStore {
	private toasts: Toast[] = [];
  	private listeners: Listener[] = [];

	subscribe(listener: Listener) {
		this.listeners.push(listener);
		return () => { this.listeners = this.listeners.filter(l => l !== listener); };
	}

	notify(message: string, type: NotificationType = 'info') {
		const id = Math.random().toString(36).substr(2, 9);
		const newToast = { id, message, type };
		
		// Add to start of array to show newest at top
		this.toasts = [newToast, ...this.toasts].slice(0, 5); // Limit to 5
		this.emit();

		// Auto-dismiss after 3 seconds
		setTimeout(() => this.remove(id), 3000);
	}

	remove(id: string) {
		this.toasts = this.toasts.filter(t => t.id !== id);
		this.emit();
	}

	private emit() {
		this.listeners.forEach(l => l(this.toasts));
	}
}

export const toastStore = new NotificationStore();


// useNotifications.ts
import { useState, useEffect } from 'react';
import { toastStore } from './notificationStore';

export function useNotifications() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    return toastStore.subscribe(setToasts);
  }, []);

  return { toasts, remove: (id) => toastStore.remove(id) };
}


// ToastContainer.tsx
import { useNotifications } from './useNotifications';

export const ToastContainer = () => {
  const { toasts, remove } = useNotifications();

  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
      {toasts.map(toast => (
        <div 
          key={toast.id} 
          role="alert"
          className={`toast toast-${toast.type}`}
          onClick={() => remove(toast.id)}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

// To trigger from ANYWHERE:
// toastStore.notify("Settings saved!", "success");
