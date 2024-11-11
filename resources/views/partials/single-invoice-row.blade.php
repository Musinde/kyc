<tr>
    <th><input name="item[]" required type="text" class="form-control item form-control-sm"></th>
    <td><input name="qty[]" required type="number" step="0.01" class="qty form-control form-control-sm"></td>
    <td><input name="rate[]" required type="number" step="0.01" class="rate form-control form-control-sm"></td>
    <td>
        <div class="input-group input-group-sm">
            <div class="input-group-text currency-field">USD</div>
            <input name="total_array[]" required type="number" step="0.01" readonly class="total form-control form-control-sm">
        </div>
    </td>
    <td><button class="btn btn-sm btn-outline-danger remove-row" type="button"> - </button>
    </td>
</tr>