import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    invoice: 'FACTURA001',
    paymentStatus: 'Completado',
    totalAmount: 'Últimas noticias sobre tecnología',
    paymentMethod: 'Tarjeta Azul',
  },
  {
    invoice: 'FACTURA002',
    paymentStatus: 'En Proceso',
    totalAmount: 'Descubrimiento científico cambia el',
    paymentMethod: 'Dinero Rápido',
  },
  {
    invoice: 'FACTURA003',
    paymentStatus: 'Pendiente',
    totalAmount: 'Elecciones nacionales generan',
    paymentMethod: 'Transferencia Segura',
  },
  {
    invoice: 'FACTURA004',
    paymentStatus: 'Pagado',
    totalAmount: 'Evento deportivo sorprende a todos',
    paymentMethod: 'Tarjeta Verde',
  },
  {
    invoice: 'FACTURA005',
    paymentStatus: 'Finalizado',
    totalAmount: 'Nueva ley impacta la economía',
    paymentMethod: 'Moneda Virtual',
  },
  {
    invoice: 'FACTURA006',
    paymentStatus: 'En Espera',
    totalAmount: 'Innovación en energía renovable',
    paymentMethod: 'Cheque Rápido',
  },
  {
    invoice: 'FACTURA007',
    paymentStatus: 'No Completado',
    totalAmount: 'Artista famoso lanza álbum',
    paymentMethod: 'Transferencia Express',
  },
];

export default function TchatTable() {
  return (
    <div className="overflow-x-auto w-full">
      <Table
        className="min-w-full text-base lg:text-lg border rounded-lg"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
      >
        <TableHeader>
          <TableRow>
            <TableHead className="px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-6 text-center bg-purple-600 text-white font-bold rounded-tl-lg border-b border-gray-300 hover:bg-purple-700 transition-colors">
              Invoice
            </TableHead>
            <TableHead className="px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-6 text-center bg-purple-600 text-white font-bold border-l border-b border-gray-300 hover:bg-purple-700 transition-colors">
              Status
            </TableHead>
            <TableHead className="px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-6 text-center bg-purple-600 text-white font-bold border-l border-b border-gray-300 hover:bg-purple-700 transition-colors">
              Method
            </TableHead>
            <TableHead className="px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-6 text-center bg-purple-600 text-white font-bold rounded-tr-lg border-l border-b border-gray-300 hover:bg-purple-700 transition-colors">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.invoice}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell className="px-2 sm:px-4 lg:px-10 py-2 sm:py-3 lg:py-6 border-b border-gray-300 font-medium whitespace-nowrap">
                {invoice.invoice}
              </TableCell>
              <TableCell className="px-2 sm:px-4 lg:px-10 py-2 sm:py-3 lg:py-6 border-l border-b border-gray-300 whitespace-nowrap">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="px-2 sm:px-4 lg:px-10 py-2 sm:py-3 lg:py-6 border-l border-b border-gray-300 whitespace-nowrap">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="px-2 sm:px-4 lg:px-10 py-2 sm:py-3 lg:py-6 border-l border-b border-gray-300 text-right break-words">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
