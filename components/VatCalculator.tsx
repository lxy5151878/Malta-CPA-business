"use client";

import { useMemo, useState } from "react";
import type { Lang } from "@/lib/siteCopy";

type VatRate = {
  label: string;
  value: number;
};

type VatRows = Record<string, { sales: string; purchases: string }>;

const vatRates: VatRate[] = [
  { label: "18%", value: 0.18 },
  { label: "12%", value: 0.12 },
  { label: "7%", value: 0.07 },
  { label: "5%", value: 0.05 },
  { label: "0%", value: 0 },
];

const initialRows: VatRows = vatRates.reduce((rows, rate) => {
  rows[rate.label] = { sales: "", purchases: "" };
  return rows;
}, {} as VatRows);

function parseAmount(value: string) {
  const parsed = Number(value.replace(/,/g, ""));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-MT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function VatCalculator({ lang }: { lang: Lang }) {
  const [rows, setRows] = useState<VatRows>(initialRows);
  const isZh = lang === "zh";

  const labels = isZh
    ? {
        kicker: "VAT Calculator",
        title: "VAT 标准计算表",
        intro: "输入当期不含 VAT 的销售额和采购额，系统会按对应税率自动计算销项 VAT、进项 VAT 及当期净 VAT。",
        rate: "VAT 税率",
        sales: "销售额（不含 VAT）",
        salesVat: "销项 VAT",
        purchases: "采购额（不含 VAT）",
        inputVat: "进项 VAT",
        net: "净 VAT",
        totalSalesVat: "销项 VAT 合计",
        totalInputVat: "进项 VAT 合计",
        payable: "当期应缴 VAT",
        credit: "当期可抵 / 留抵 VAT",
        reset: "清空",
        disclaimer: "本工具仅用于基础估算。具体 VAT 处理仍需结合发票、供应地点、豁免、抵扣限制及 MTCA 要求确认。",
      }
    : {
        kicker: "VAT Calculator",
        title: "Standard VAT calculation table",
        intro:
          "Enter current-period sales and purchases excluding VAT. The table calculates output VAT, input VAT, and the net VAT position automatically.",
        rate: "VAT rate",
        sales: "Sales excluding VAT",
        salesVat: "Output VAT",
        purchases: "Purchases excluding VAT",
        inputVat: "Input VAT",
        net: "Net VAT",
        totalSalesVat: "Total output VAT",
        totalInputVat: "Total input VAT",
        payable: "VAT payable for period",
        credit: "VAT credit for period",
        reset: "Reset",
        disclaimer:
          "This tool is for basic estimation only. Final VAT treatment should be checked against invoices, place-of-supply rules, exemptions, input VAT restrictions, and MTCA requirements.",
      };

  const totals = useMemo(() => {
    return vatRates.reduce(
      (acc, rate) => {
        const sales = parseAmount(rows[rate.label]?.sales ?? "");
        const purchases = parseAmount(rows[rate.label]?.purchases ?? "");
        const outputVat = sales * rate.value;
        const inputVat = purchases * rate.value;

        acc.outputVat += outputVat;
        acc.inputVat += inputVat;
        acc.lines[rate.label] = { outputVat, inputVat, netVat: outputVat - inputVat };
        return acc;
      },
      {
        outputVat: 0,
        inputVat: 0,
        lines: {} as Record<string, { outputVat: number; inputVat: number; netVat: number }>,
      },
    );
  }, [rows]);

  const netVat = totals.outputVat - totals.inputVat;

  const updateAmount = (rate: string, field: "sales" | "purchases", value: string) => {
    if (!/^\d*([.,]\d{0,2})?$/.test(value)) return;

    setRows((current) => ({
      ...current,
      [rate]: {
        ...current[rate],
        [field]: value.replace(",", "."),
      },
    }));
  };

  return (
    <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5" id="vat-calculator">
      <div className="card border-0 bg-secondary rounded-5 overflow-hidden">
        <div className="card-body p-4 p-lg-5">
          <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4">
            <div>
              <div className="fs-sm text-uppercase text-body-secondary mb-2">{labels.kicker}</div>
              <h2 className="h1 mb-2">{labels.title}</h2>
              <p className="mb-0 text-body-secondary" style={{ maxWidth: 820 }}>
                {labels.intro}
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="btn btn-outline-primary" type="button" onClick={() => setRows(initialRows)}>
                {labels.reset}
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">{labels.rate}</th>
                  <th scope="col">{labels.sales}</th>
                  <th scope="col" className="text-end">
                    {labels.salesVat}
                  </th>
                  <th scope="col">{labels.purchases}</th>
                  <th scope="col" className="text-end">
                    {labels.inputVat}
                  </th>
                  <th scope="col" className="text-end">
                    {labels.net}
                  </th>
                </tr>
              </thead>
              <tbody>
                {vatRates.map((rate) => {
                  const line = totals.lines[rate.label] ?? { outputVat: 0, inputVat: 0, netVat: 0 };

                  return (
                    <tr key={rate.label}>
                      <th scope="row">{rate.label}</th>
                      <td style={{ minWidth: 170 }}>
                        <input
                          className="form-control"
                          inputMode="decimal"
                          value={rows[rate.label]?.sales ?? ""}
                          onChange={(event) => updateAmount(rate.label, "sales", event.target.value)}
                          placeholder="0.00"
                          aria-label={`${labels.sales} ${rate.label}`}
                        />
                      </td>
                      <td className="text-end">{formatMoney(line.outputVat)}</td>
                      <td style={{ minWidth: 170 }}>
                        <input
                          className="form-control"
                          inputMode="decimal"
                          value={rows[rate.label]?.purchases ?? ""}
                          onChange={(event) => updateAmount(rate.label, "purchases", event.target.value)}
                          placeholder="0.00"
                          aria-label={`${labels.purchases} ${rate.label}`}
                        />
                      </td>
                      <td className="text-end">{formatMoney(line.inputVat)}</td>
                      <td className="text-end fw-semibold">{formatMoney(line.netVat)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-3 pt-4">
            <div className="col">
              <div className="bg-white rounded-4 p-3 h-100">
                <div className="text-body-secondary fs-sm">{labels.totalSalesVat}</div>
                <div className="h4 mb-0">{formatMoney(totals.outputVat)}</div>
              </div>
            </div>
            <div className="col">
              <div className="bg-white rounded-4 p-3 h-100">
                <div className="text-body-secondary fs-sm">{labels.totalInputVat}</div>
                <div className="h4 mb-0">{formatMoney(totals.inputVat)}</div>
              </div>
            </div>
            <div className="col">
              <div className="bg-white rounded-4 p-3 h-100">
                <div className="text-body-secondary fs-sm">{netVat >= 0 ? labels.payable : labels.credit}</div>
                <div className={`h4 mb-0 ${netVat < 0 ? "text-success" : ""}`}>{formatMoney(Math.abs(netVat))}</div>
              </div>
            </div>
          </div>

          <p className="fs-sm text-body-secondary pt-3 mb-0">{labels.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
